import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { List, Item, Text, Button } from './ContactList.styled';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  if (!contacts) return;

  return (
    <List>
      {contacts.map(({ id, name, phone }) => (
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
