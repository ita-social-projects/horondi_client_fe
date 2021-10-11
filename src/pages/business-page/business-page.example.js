// import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import parse from 'html-react-parser';
// import _ from 'lodash';
// import { getBusinessTextByCode } from './operations/business-page.query';
// import errorOrLoadingHandler from '../../utils/errorOrLoadingHandler';

// import { useStyles } from './business-page.style';
// import { useQuery } from '@apollo/client';

// const BusinessPage = ({ match }) => {
//   const [businessText, setBusinessText] = useState([]);
//   const pageCode = match.params.page;
//   console.log(pageCode);
//   const { language } = useSelector(({ Language }) => ({
//     language: Language.language
//   }));

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pageCode]);

//   const { error, loading } = useQuery(getBusinessTextByCode, {
//     onCompleted: (data) => setBusinessText(data.getBusinessTextByCode)
//   });

//   const addressText = page?.text && parse(page?.text[language].value);
//   const styles = useStyles();

//   if (loading || error) return errorOrLoadingHandler(error, loading);

//   return (
//     <div className={styles.root}>
//       {page.title && <h1>{page.title[language].value}</h1>}
//       {addressText}
//     </div>
//   );
// };

// export default BusinessPage;
