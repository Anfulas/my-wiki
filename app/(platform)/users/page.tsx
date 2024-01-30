"use client"
import { Accordion, AccordionItem, Checkbox } from '@carbon/react'
import React from 'react'
//import CheckboxGroup from '@carbon/CheckboxGroup';

const checkboxEvents = {
  className: 'some-class',
  labelText: 'Checkbox label'
};

const fieldsetCheckboxProps = () => ({
  className: 'some-class',
  legendText: 'Group label'
});

const UserPage = () => {
  return (
    <Accordion align="start">
      <AccordionItem title="Panel A">Panel A</AccordionItem>
      <AccordionItem title="Panel B">Panel B</AccordionItem>
      <AccordionItem title="Panel C">Panel C</AccordionItem>
      <Checkbox {...checkboxEvents} id="checkbox-3" helperText="Helper text goes here" />
      <br /> <br />
    </Accordion>
  )

}
// export const Playground = args => <CheckboxGroup {...fieldsetCheckboxProps()} {...args}>
//     <Checkbox defaultChecked {...checkboxEvents} id="checkbox-0" helperText="hello" />
//     <Checkbox {...checkboxEvents} id="checkbox-1" />
//     <Checkbox disabled {...checkboxEvents} id="checkbox-2" />
//   </CheckboxGroup>;

export default UserPage
