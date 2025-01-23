import { useEffect, useState } from 'react';
import { TextField } from '@mui/material';

import { getComponentFromMap } from '@pega/react-sdk-components/lib/bridge/helpers/sdk_component_map';
import { PConnFieldProps } from '@pega/react-sdk-components/lib/types/PConnProps';
import handleEvent from '@pega/react-sdk-components/lib/components/helpers/event-utils';

import StyledAreteansAreteansReactSdkUserDescriptionWrapper from './styles';

interface AreteansAreteansReactSdkUserDescriptionProps extends PConnFieldProps {
  // If any, enter additional props that only exist on this componentName
  fieldMetadata?: any;
}

// Duplicated runtime code from React SDK

// props passed in combination of props from property panel (config.json) and run time props from Constellation
export default function AreteansAreteansReactSdkUserDescription(props: AreteansAreteansReactSdkUserDescriptionProps) {
  // Get emitted components from map (so we can get any override that may exist)
  const FieldValueList = getComponentFromMap('FieldValueList');

  const {
    getPConnect,
    label,
    required,
    disabled,
    value = '',
    validatemessage,
    status,
    readOnly,
    testId,
    fieldMetadata,
    helperText,
    displayMode,
    hideLabel,
    placeholder
  } = props;
  const helperTextToDisplay = validatemessage || helperText;

  const pConn = getPConnect();
  const actions = pConn.getActionsApi();
  const propName = (pConn.getStateProps() as any).value;
  const maxLength = fieldMetadata?.maxLength;

  const [inputValue, setInputValue] = useState('');

  let readOnlyProp = {};

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  if (displayMode === 'DISPLAY_ONLY') {
    return <FieldValueList name={hideLabel ? '' : label} value={value} />;
  }

  if (displayMode === 'STACKED_LARGE_VAL') {
    return <FieldValueList name={hideLabel ? '' : label} value={value} variant='stacked' />;
  }

  if (readOnly) {
    // Not just emitting a read only Textfield like some other components do
    //  since we want to preserve the minRows, maxRows info.
    readOnlyProp = { readOnly: true };
  }

  let testProp = {};

  testProp = {
    'data-test-id': testId
  };

  function handleChange(event) {
    // update internal value
    setInputValue(event?.target?.value);
  }

  function handleBlur() {
    handleEvent(actions, 'changeNblur', propName, inputValue);
  }

  return (
    <StyledAreteansAreteansReactSdkUserDescriptionWrapper>
      <TextField
        multiline
        minRows={5}
        maxRows={5}
        fullWidth
        variant={readOnly ? 'standard' : 'outlined'}
        helperText={helperTextToDisplay}
        placeholder={placeholder ?? ''}
        size='small'
        required={required}
        disabled={disabled}
        onChange={handleChange}
        onBlur={!readOnly ? handleBlur : undefined}
        error={status === 'error'}
        label={label}
        value={inputValue}
        InputProps={{ ...readOnlyProp, inputProps: { maxLength, ...testProp } }}
      />
    </StyledAreteansAreteansReactSdkUserDescriptionWrapper>
  );
}
