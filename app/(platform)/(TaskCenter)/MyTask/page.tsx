"use client"
import { Accordion, AccordionItem, Button, Checkbox, FileUploader, Form, FormGroup, NumberInput, RadioButton, RadioButtonGroup, Search, Select, SelectItem, Stack, TextArea, TextInput } from '@carbon/react'
import React from 'react'
//import CheckboxGroup from '@carbon/CheckboxGroup';
const checkboxEvents = {
  className: 'some-class',
  labelText: 'Checkbox label'
};
const fieldsetCheckboxProps = () => ({
  className: 'some-class',
  legendText: 'Checkbox heading'
});
const numberInputProps = {
  className: 'some-class',
  id: 'number-input-1',
  label: 'Number Input',
  min: 0,
  max: 100,
  value: 50,
  step: 10,
  iconDescription: 'Add/decrement number'
};
const fileUploaderEvents = {
  buttonLabel: 'Add files',
  className: 'some-class'
};
const fieldsetFileUploaderProps = {
  className: 'some-class',
  legendText: 'File Uploader'
};
const radioProps = {
  className: 'some-class'
};
const searchProps = {
  className: 'some-class',
  size: 'md' as const
};
const fieldsetSearchProps = {
  className: 'some-class',
  legendText: 'Search'
};
const selectProps = {
  className: 'some-class'
};
const TextInputProps = {
  className: 'some-class',
  id: 'test2',
  labelText: 'Text Input label',
  placeholder: 'Placeholder text'
};
const PasswordProps = {
  className: 'some-class',
  id: 'test3',
  labelText: 'Password'
};
const InvalidPasswordProps = {
  className: 'some-class',
  id: 'test4',
  labelText: 'Password',
  invalid: true,
  invalidText: 'Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and one number.'
};
const textareaProps = {
  labelText: 'Text Area label',
  className: 'some-class',
  placeholder: 'Placeholder text',
  id: 'test5',
  rows: 4
};
const buttonEvents = {
  className: 'some-class'
};


const MyTask = () => <Form aria-label="sample form">
    <Stack gap={7}>
      <FormGroup {...fieldsetCheckboxProps()}>
        <Checkbox defaultChecked {...checkboxEvents} id="checkbox-0" />
        <Checkbox {...checkboxEvents} id="checkbox-1" />
        <Checkbox disabled {...checkboxEvents} id="checkbox-2" />
      </FormGroup>

      <NumberInput {...numberInputProps} />

      <FormGroup {...fieldsetFileUploaderProps}>
        <FileUploader {...fileUploaderEvents} id="file-1" role="button" labelDescription="Max file size is 500mb. Only .jpg files are supported." buttonLabel="Add file" buttonKind="primary" size="md" filenameStatus="edit" accept={['.jpg', '.png']} multiple={true} disabled={false} iconDescription="Dismiss file" name="" />
      </FormGroup>

      <RadioButtonGroup name="radio-button-group" defaultSelected="default-selected" legendText="Radio Button heading">
        <RadioButton value="standard" id="radio-1" labelText="Standard Radio Button" {...radioProps} />
        <RadioButton value="default-selected" labelText="Default Selected Radio Button" id="radio-2" {...radioProps} />
        <RadioButton value="blue" labelText="Standard Radio Button" id="radio-3" {...radioProps} />
        <RadioButton value="disabled" labelText="Disabled Radio Button" id="radio-4" disabled {...radioProps} />
      </RadioButtonGroup>

      <FormGroup {...fieldsetSearchProps}>
        <Search {...searchProps} id="search-1" labelText="Search" placeholder="Search" />
      </FormGroup>

      <Select placeholder={undefined} {...selectProps} id="select-1" defaultValue="placeholder-item">
        <SelectItem disabled hidden value="placeholder-item" text="Choose an option" />
        <SelectItem value="option-1" text="Option 1" />
        <SelectItem value="option-2" text="Option 2" />
        <SelectItem value="option-3" text="Option 3" />
      </Select>

      <TextInput {...TextInputProps} />

      <TextInput type="password" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" {...PasswordProps} />

      <TextInput type="password" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" {...InvalidPasswordProps} />

      <TextArea {...textareaProps} />

      <Button type="submit" {...buttonEvents}>
        Submit
      </Button>
    </Stack>
  </Form>;

export default MyTask;