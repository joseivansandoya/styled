// import components
import Wrapper from '../presentational/Wrapper';
import Header from '../presentational/Header';

// import custom styles
import wrapperCustomStyles from '../styles/wrapper.custom';
import headerCustomStyles from '../styles/header.custom';
import titleCustomStyles from '../styles/title.custom';
import linkCustomStyles from '../styles/link.custom';

const cmpConfig = {
  containerConfig: {
    settings: {},
    components: {
      wrapper: {
        instance: Wrapper,
        settings: {
          styles: wrapperCustomStyles
        },
        components: {
          header: {
            instance: Header,
            settings: {
              styles: headerCustomStyles
            },
            components: {
              title: {
                settings: {
                  styles: titleCustomStyles
                }
              },
              link: {
                settings: {
                  styles: linkCustomStyles
                }
              }
            }
          }
        }
      }
    }
  },
  foo: 'bar'
};

export default cmpConfig;
