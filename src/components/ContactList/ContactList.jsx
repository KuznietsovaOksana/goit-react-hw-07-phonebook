import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { List, Item, Text, Button } from './ContactList.styled';
import { selectContacts, selectFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  if (!contacts) return;
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <List>
      {visibleContacts.map(({ id, name, phone }) => (
        <Item key={id}>
          <Text>
            {name}: {phone}{' '}
          </Text>
          <Button
            type="button"
            onClick={() => {
              const action = deleteContact(id);
              dispatch(action);
            }}
          >
            delete
          </Button>
        </Item>
      ))}
    </List>
  );
};
