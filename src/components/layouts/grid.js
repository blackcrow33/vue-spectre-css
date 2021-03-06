import { mergeData } from 'vue-functional-data-merge';
import memoize from '@/utils/memoize';
import { strType, boolType } from '@/utils/proptypes';
import { getLayout } from '@/utils/get-var';

const cprops = memoize(() => {
  const props = getLayout().viewports.reduce((p, vp) => {
    p[vp] = boolType();
    return p;
  }, {});

  return {
    tag: strType('div'),
    ...props
  };
});

export default {
  name: 'SGrid',
  functional: true,
  get props() {
    delete this.props;
    return (this.props = cprops());
  },
  render(h, { props, data, children }) {
    const _class = Object.entries(props)
      .filter(p => typeof p[1] == 'boolean' && p[1])
      .reduce((arr, p) => {
        arr.push('grid-' + p[0]);
        return arr;
      }, []);

    return h(
      props.tag,
      mergeData(data, { staticClass: 'container', class: _class }),
      children
    );
  }
};
