export const showIcon = () => {
  const fbChatIcon = document.getElementById('fb-root').style.visibility;
  if (fbChatIcon === 'visible') {
    document.getElementById('fb-root').style.visibility = 'hidden';
  } else if (fbChatIcon === '' || fbChatIcon === 'hidden') {
    document.getElementById('fb-root').style.visibility = 'visible';
  }
};
