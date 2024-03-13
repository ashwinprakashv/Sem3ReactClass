/*-------------------------------------------------------------------
|  🐼 Input Validators 
|
|  🐯 Purpose: THIS FILE CONTAINS ALL THE VALIDATORS OBJECTS
|
|  🐸 Returns:  -
*-------------------------------------------------------------------*/

export const name_validation = {
  name: 'Employee Name',
  label: 'Employee Name',
  type: 'text',
  id: 'name',
  placeholder: 'write your name ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
}

export const address_validation = {
  name: 'Address',
  label: 'Address',
  multiline: true,
  id: 'address',
  placeholder: 'write your address ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 20,
      message: '200 characters max',
    },
  },
}

export const no_validation = {
  name: 'Mobile Number',
  label: 'Mobile Number',
  type: 'number',
  id: 'number',
  placeholder: 'write your mobile number ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    minLength: {
      value: 10,
      message: 'min 10 characters',
    },
  },
}

export const num_validation = {
  name: 'Employee ID',
  label: 'Employee ID',
  type: 'number',
  id: 'id',
  placeholder: 'write your employee id ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
  },
}

export const email_validation = {
  name: 'email',
  label: 'Email address',
  type: 'email',
  id: 'email',
  placeholder: 'write your email address ...',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'not valid',
    },
  },
}
