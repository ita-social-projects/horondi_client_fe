import { setMessageState, sendEmail } from '../chat.actions';
import { SET_MESSAGE_STATE, SEND_CHAT_MAIL } from '../chat.types';

describe('setMessageState action test', () => {
  let type;
  let chatAction;
  const mailObj = {
    mailID: true
  };

  beforeEach(() => {
    type = SET_MESSAGE_STATE;
    chatAction = setMessageState(mailObj);
  });

  it('should return object', () => {
    expect(typeof chatAction).toStrictEqual('object');
  });

  it('should to be truthy', () => {
    expect(chatAction).toBeTruthy();
  });

  it('value by key "type" of returned object should to be equal to "SET_MESSAGE_STATE"', () => {
    expect(chatAction.type).toEqual(type);
  });

  it('value by key "payload.name" of returned object should to be true', () => {
    chatAction = setMessageState(mailObj);
    expect(chatAction.payload).toBeTruthy();
  });
});

describe('sendEmail action test', () => {
  let type;
  let chatAction;
  const mailObj = {
    email: 'asd@asd.asd',
    senderName: 'Name',
    text: 'Text',
    language: '0'
  };

  beforeEach(() => {
    type = SEND_CHAT_MAIL;
    chatAction = sendEmail(mailObj);
  });

  it('should return object', () => {
    expect(typeof chatAction).toStrictEqual('object');
  });

  it('should to be truthy', () => {
    expect(chatAction).toBeTruthy();
  });

  it('value by key "type" of returned object should to be equal to "SEND_CHAT_MAIL"', () => {
    expect(chatAction.type).toEqual(type);
  });

  it('value by key "payload.name" of returned object should to be true', () => {
    chatAction = sendEmail(mailObj);
    expect(chatAction.payload).toBeTruthy();
  });
});
