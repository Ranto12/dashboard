import { DetailNotes } from '@app/view';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => ({
  props: {
    headTitle: 'Edit Item',
  },
});

export default DetailNotes;
