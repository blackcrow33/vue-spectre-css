import { boolType } from '@/utils/proptypes';
import { getInput } from '@/utils/get-var';
import memoize from '@/utils/memoize';

const cprops = memoize(() => {
  const props = getInput().colors.reduce(
    (p, v) => (p[v] = boolType()) && p,
    Object.create(null)
  );
  return props;
});

export function colorData(prefix, props) {
  const cls = getInput().colors.reduce((arr, s) => {
    props[s] && arr.push(prefix + '-' + s);
    return arr;
  }, []);

  return {
    class: cls
  };
}

export default {
  props: cprops()
};
