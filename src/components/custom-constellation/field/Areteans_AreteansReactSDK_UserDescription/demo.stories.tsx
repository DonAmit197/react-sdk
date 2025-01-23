/* eslint-disable react/jsx-no-useless-fragment */
// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react';

import AreteansAreteansReactSdkUserDescription from './index';

import { stateProps, configProps, fieldMetadata } from './mock';

const meta: Meta<typeof AreteansAreteansReactSdkUserDescription> = {
  title: 'AreteansAreteansReactSdkUserDescription',
  component: AreteansAreteansReactSdkUserDescription,
  excludeStories: /.*Data$/
};

export default meta;
type Story = StoryObj<typeof AreteansAreteansReactSdkUserDescription>;

export const BaseAreteansAreteansReactSdkUserDescription: Story = args => {
  const props = {
    value: configProps.value,
    hasSuggestions: configProps.hasSuggestions,
    fieldMetadata,
    getPConnect: () => {
      return {
        getStateProps: () => {
          return stateProps;
        },
        getActionsApi: () => {
          return {
            updateFieldValue: () => {
              /* nothing */
            },
            triggerFieldChange: () => {
              /* nothing */
            }
          };
        },
        ignoreSuggestion: () => {
          /* nothing */
        },
        acceptSuggestion: () => {
          /* nothing */
        },
        setInheritedProps: () => {
          /* nothing */
        },
        resolveConfigProps: () => {
          /* nothing */
        }
      };
    }
  };

  return (
    <>
      <AreteansAreteansReactSdkUserDescription {...props} {...args} />
    </>
  );
};

BaseAreteansAreteansReactSdkUserDescription.args = {
  label: configProps.label,
  helperText: configProps.helperText,
  placeholder: configProps.placeholder,
  testId: configProps.testId,
  readOnly: configProps.readOnly,
  disabled: configProps.disabled,
  required: configProps.required,
  status: configProps.status,
  hideLabel: configProps.hideLabel,
  displayMode: configProps.displayMode,
  variant: configProps.variant,
  validatemessage: configProps.validatemessage
};
