import { Mutator } from 'final-form';

const mutator: Mutator = ([name, value], state, { changeValue }) => {
  changeValue(state, name, () => value);
};

export default mutator;
