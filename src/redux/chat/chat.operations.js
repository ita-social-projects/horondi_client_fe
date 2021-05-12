import { client, setItems } from '../../utils/client';

export const sendMail = async ({ senderName, text, email, language }) => {
  const sendMailMutation = `
      mutation{
  addEmailQuestion(
    question:{
      senderName: $senderName
      text: $text
      email: $email,
      language: $language
    }){
    _id
  }
 }`;
  const result = await setItems(sendMailMutation, { senderName, text, email, language });
  await client.resetStore();

  return result?.data?.addEmailQuestion;
};
