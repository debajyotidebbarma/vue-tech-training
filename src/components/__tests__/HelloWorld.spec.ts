import { render } from '@testing-library/vue';
import FrontPage from '../FrontPage.vue';

describe('Front Page', () => {
  it('It renders the text "Ecosystem"', () => {
    const { getByText } = render(FrontPage);
    getByText('Ecosystem');
  });
});
