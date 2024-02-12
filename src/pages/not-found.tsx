import { NotFound } from '@app/view';

export const getStaticProps = () => ({
  props: {
    pageTitle: 'Library',
    headTitle: 'Unit Library',
  },
});

export default NotFound;
