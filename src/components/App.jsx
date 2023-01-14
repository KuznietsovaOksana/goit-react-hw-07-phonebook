import { ThemeProvider } from 'styled-components';
import { GlobalStyleComponent } from 'styles/GlobalStyles';
import { theme } from 'styles/theme';

import { Container } from './Container/Container.styled';
import { MainTitle } from './MainTitle/MainTitle';
import { ContactForm } from './ContactForm/ContactForm';
import { Title } from './Title/Title';
import { Filter } from './Filter/Filter';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { ContactList } from './ContactList/ContactList';
import { selectError, selectIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <MainTitle title="Phonebook ☎" />
        <ContactForm />
        <Title title="Contacts 📞" />
        <Filter />
        {(isLoading && !error && (
          <>
            <br />
            <b>Request in progress...</b>
          </>
        )) || <ContactList />}
        <GlobalStyleComponent />
      </Container>
    </ThemeProvider>
  );
};
