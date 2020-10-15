import React from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import { useState } from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';
import StarBorder from '@material-ui/icons/StarBorder';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { useStyles } from './sidebar-items.style';
import { LANGUAGES_LIST } from '../../../configs';
const backpack = [
  {
    roltop: 'url',
    new: 'url',
    pampkin: 'url'
  },
  {
    bag: 'url',
    tapestryBag: 'url',
    threeColorBag: 'url',
    oneColorBag: 'url'
  },
  {
    wallet: 'url',
    bananka: 'url'
  }
];
//const bags = [['Ролтоп', 'Новий', 'Гарбуз'], ['Гаманець', 'Бананка'], ["Сумка одноколірна", "Сумка 'Три кольори'", "Cумка з гобеленом"]]
const wallet = ['wallet', 'bananka'];

const models = [];
const bags = [
  {
    name: 'Ролтоп ',
    url: '#'
  },
  {
    name: 'Новий',
    url: '#'
  },
  {
    name: 'Гарбуз',
    url: '#'
  }
];

const accesoares = ['Гаманець', 'Бананка'];
const rolltop = ['пес', 'кіт'];

const bagsEn = ['Rolltop', 'New', 'Harbuz'];
const accessoriesEn = ['Wallet', 'Funny pack'];
const backpacksEn = [
  'Bag With A Pattern',
  'Three Color Bag',
  'One Color Bag',
  'Bag'
];
let menuIt = {
  0: {
    Bags: bags,
    Accessories: accesoares,
    Backpacks: rolltop
  },
  1: {
    Bags: bagsEn,
    Accessories: accessoriesEn,
    Backpacks: backpacksEn
  }
};

const SideBarItem = ({ name, language }) => {
  const styles = useStyles();
  const [isListOpen, toggleList] = useState(false);
  const handleClick = () => {
    toggleList((prevValue) => toggleList(!prevValue));
  };

  const currentLanguage = LANGUAGES_LIST.find(
    (lang) => lang.value === language
  );
  //console.log(menuIt[name[1].value])
  console.log(currentLanguage);

  return (
    <div>
      <ListItemText
        button
        onClick={handleClick}
        primary={name[language].value}
        className={styles.link}
      >
        {isListOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemText>

      <Collapse in={isListOpen} timeout='auto' unmountOnExit>
        <List>
          {menuIt[language][name[1].value].map((model) => (
            <ListItem button className={styles.nested} key={model.name}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary={model.name} />
            </ListItem>
          ))}
        </List>
      </Collapse>

      {/**     <ListItemText
        button
        onClick={handleClick}
        primary="Сумки"
        className={styles.link}
      >
        {isListOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemText> 
      
       <Collapse in={isListOpen} timeout='auto' unmountOnExit> 
              <List >       
        
              <ListItem button className={styles.nested} >  
             <ListItemIcon>
                 <StarBorder />
             </ListItemIcon>
             <ListItemText primary={bag[0][0]} />
           </ListItem>

           <ListItem button className={styles.nested} >  
             <ListItemIcon>
                 <StarBorder />
             </ListItemIcon>
             <ListItemText primary={bag[0][1]} />
           </ListItem>
           <ListItem button className={styles.nested} >  
             <ListItemIcon>
                 <StarBorder />
             </ListItemIcon>
             <ListItemText primary={bag[0][2]} />
           </ListItem>
         </List>
      </Collapse> 



      <ListItemText
        button
        onClick={handleClick}
        primary="Рюкзаки"
        className={styles.link}
      >
        {isListOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemText> 
      
       <Collapse in={isListOpen} timeout='auto' unmountOnExit> 
              <List >       
        
              <ListItem button className={styles.nested} >  
             <ListItemIcon>
                 <StarBorder />
             </ListItemIcon>
             <ListItemText primary={bag[0][0]} />
           </ListItem>

           <ListItem button className={styles.nested} >  
             <ListItemIcon>
                 <StarBorder />
             </ListItemIcon>
             <ListItemText primary={bag[0][1]} />
           </ListItem>
           <ListItem button className={styles.nested} >  
             <ListItemIcon>
                 <StarBorder />
             </ListItemIcon>
             <ListItemText primary={bag[0][2]} />
           </ListItem>
         </List>
      </Collapse> 


      <ListItemText
        button
        onClick={handleClick}
        primary="Аксесуари"
        className={styles.link}
      >
        {isListOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemText> 
      
       <Collapse in={isListOpen} timeout='auto' unmountOnExit> 
              <List >       
        
              <ListItem button className={styles.nested} >  
             <ListItemIcon>
                 <StarBorder />
             </ListItemIcon>
             <ListItemText primary={bag[1][0]} />
           </ListItem>

           <ListItem button className={styles.nested} >  
             <ListItemIcon>
                 <StarBorder />
             </ListItemIcon>
             <ListItemText primary={bag[1][1]} />
           </ListItem>
          
         </List>
      </Collapse> 


*/}
    </div>
  );
};
export default SideBarItem;
