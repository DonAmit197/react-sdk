import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import AreteansAreteansReactSdkUserDescription from './index';
import { configProps, fieldMetadata } from './mock';

const meta: Meta<typeof AreteansAreteansReactSdkUserDescription> = {
  title: 'AreteansAreteansReactSdkUserDescription',
  component: AreteansAreteansReactSdkUserDescription,
  excludeStories: /.*Data$/
};

export default meta;
type Story = StoryObj<typeof AreteansAreteansReactSdkUserDescription>;

export const BaseAreteansAreteansReactSdkUserDescription: Story = args => {
  const [value, setValue] = useState(configProps.value);

  const props = {
    value,
    placeholder: configProps.placeholder,
    fieldMetadata,
    getPConnect: () => {
      return {
        getActionsApi: () => {
          return {
            updateFieldValue: (propName, theValue) => {
              setValue(theValue);
            }
          };
        },
        getStateProps: () => {
          return { value: '.name' };
        }
      };
    },
    onChange: event => {
      setValue(event.target.value);
    },
    onBlur: () => {
      return configProps.value;
    }
  };

  return <AreteansAreteansReactSdkUserDescription {...props} {...args} />;
};

BaseAreteansAreteansReactSdkUserDescription.args = {
  label: configProps.label,
  helperText: configProps.helperText,
  testId: configProps.testId,
  readOnly: configProps.readOnly,
  disabled: configProps.disabled,
  required: configProps.required,
  status: configProps.status,
  hideLabel: configProps.hideLabel,
  displayMode: configProps.displayMode,
  validatemessage: configProps.validatemessage
};
