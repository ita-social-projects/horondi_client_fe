import { gql } from '@apollo/client';
import { client } from '../../utils/client';

export const sendMail = async (payload) => {
  console.log(payload);
  const result = await client.mutate({
    mutation: gql`
      mutation{
  addEmailQuestion(
    question:{
      senderName:"${payload.senderName}"
      text: "${payload.text}"
      email: "${payload.email}",
      language: ${payload.language}
    }){
    _id
  }
 }`
  });
  await client.resetStore();
  console.log(result);
  return result;
};
