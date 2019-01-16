const parseStyles = jsonStyles => {
  let strStyles = '';
  for (const ruleKey in jsonStyles) {
    if (jsonStyles.hasOwnProperty(ruleKey)) {
      strStyles += `${ruleKey}: ${jsonStyles[ruleKey]}; `;
    }
  }

  return strStyles;
}

export default parseStyles;
