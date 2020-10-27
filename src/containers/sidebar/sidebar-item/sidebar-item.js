import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import {getBurgerMenu} from'../../../redux/burgerMenu/burgerMenu.actions'

import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';
import StarBorder from '@material-ui/icons/StarBorder';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { useDispatch, useSelector } from 'react-redux';
// import {
//   backpacks,
//   accessories,
//   bags,
//   bagsEn,
//   accessoriesEn,
//   backpacksEn
// } from './side-bar-item-component';
import { getCategoryURL } from '../../../pages/home/categories-list/categories-list';
import { useStyles } from './sidebar-items.style';
import { setModelsFilter } from '../../../redux/products/products.actions';

// const menuItems = {
//   0: {
//     Bags: bags,
//     Accessories: accessories,
//     Backpacks: backpacks
//   },
//   1: {
//     Bags: bagsEn,
//     Accessories: accessoriesEn,
//     Backpacks: backpacksEn
//   }
// };

// const SideBarItem = ({ handler, name, language }) => {
//   const styles = useStyles();
//   const [isListOpen, toggleList] = useState(false);
//   const handleClick = () => {
//     toggleList((prevValue) => toggleList(!prevValue));
//   };

//     const dispatch = useDispatch();
//   const handleModelClick = (model) => {
//     dispatch(setModelsFilter([model.action]));
//   };

//   return (
//     <div>
//       <ListItemText
//         button='true'
//         onClick={handleClick}
//         primary={name[language].value}
//         className={styles.link}
//       >
//         {isListOpen ? <ExpandLess /> : <ExpandMore />}
//       </ListItemText>

//       <Collapse in={isListOpen} timeout='auto' unmountOnExit>
//         <List className={styles.list}>
//           {menuItems[language][name[1].value].map((model) => (
//             <ListItem
//               button
//               className={styles.nested}
//               key={model.name}
//               onClick={() => {
//                 handler();
//                 handleModelClick(model);
//               }}
//               component={Link}
//               to={`/${getCategoryURL(name)}/${model.name}`}
//             >
//               <ListItemIcon>
//                 <StarBorder />
//               </ListItemIcon>
//               <ListItemText primary={model.name} />
//             </ListItem>
//           ))}
//         </List>
//       </Collapse>
//     </div>
//   );
// };

const SideBarItem = ({ handler, models, language, name }) => {
  const styles = useStyles();
  const [isListOpen, toggleList] = useState(false);
  const handleClick = () => {
    toggleList((prevValue) => toggleList(!prevValue));
  };

  const dispatch = useDispatch();
  const handleModelClick = (models) => {
    dispatch(setModelsFilter([models.action]));
  };
  console.log(models, language, name);

  return (
    <div>
      <ListItemText
        button='true'
        onClick={handleClick}
        primary={models.name[language].value}
        className={styles.link}
      >
        {isListOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemText>

      <Collapse in={isListOpen} timeout='auto' unmountOnExit>
        <List className={styles.list}>
          {models.map((model) => (
            <ListItem
              button
              className={styles.nested}
              key={model._id}
              onClick={() => {
                handler();
                handleModelClick(model);
              }}
              component={Link}
              to={`${name[1].value.toLowerCase()}/${model.name[1].value.toLowerCase()}`}
            >
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary={model.name} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </div>
  );
};

export default SideBarItem;
