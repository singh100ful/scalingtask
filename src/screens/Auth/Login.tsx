import {useNavigation} from '@react-navigation/core';
import {Formik} from 'formik';
import * as React from 'react';
import {View} from 'react-native';
import ButtonAtom from 'src/components/atoms/ButtonAtom';
import TextInputAtom from 'src/components/atoms/TextInputAtom';
import * as yup from 'yup';
import data from 'src/shared/data.json';
import {v4 as uuid} from 'uuid';
import {useDispatch} from 'react-redux';
import {Add} from 'src/store/services/Login';

interface LoginProps {}

interface Loginform {
  id: string;
  email: string;
  password: string;
}

const Login: React.FC<LoginProps> = ({}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleSubmit = (values: Loginform) => {
    let form = {
      id: '',
      email: values.email,
      password: values.password,
    };

    const login = data.user.filter(element => {
      return element.email === form.email && element.password;
    });

    if (login.length !== 0) {
      const loginid = uuid();
      form.id = loginid;
      dispatch(Add(form));
      console.log(loginid);
    }
  };
  return (
    <View style={{flex: 1}}>
      <Formik
        initialValues={{id: '', email: '', password: ''}}
        validationSchema={yup.object().shape({
          email: yup
            .string()
            .email('Invalid E-mail')
            .required('Email is Required'),
          password: yup.string().required('Password is Required'),
        })}
        onSubmit={handleSubmit}>
        {formProps => (
          <View>
            <TextInputAtom
              value={formProps.values.email}
              onChangeText={formProps.handleChange('email')}
              onBlur={formProps.handleBlur('email')}
              placeholder="Enter Email"
              keyboardType="email-address"
            />
            <TextInputAtom
              value={formProps.values.password}
              onChangeText={formProps.handleChange('password')}
              onBlur={formProps.handleBlur('password')}
              placeholder="Enter Password"
              secureTextEntry={true}
            />
            <ButtonAtom name="Submit" onPress={formProps.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;
