import { numStrType } from '@/utils/proptypes';
import { isExist } from '@/utils/object';

export function badgeData({ badge }) {
  if (!isExist(badge)) return {};

  return Object.freeze({
    staticClass: 'badge',
    attrs: { 'data-badge': '' + badge }
  });
}

export default { props: { badge: numStrType() } };
