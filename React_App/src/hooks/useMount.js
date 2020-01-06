import useEffectOnce from './useEffectOnces';

const useMount = fn => {
  useEffectOnce(() => {
    fn();
  });
};

export default useMount;
