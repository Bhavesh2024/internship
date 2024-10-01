import { useDispatch, useSelector } from 'react-redux';

// Custom hook for dispatch
export const useAppDispatch = () => {
  return useDispatch();
};

// Custom hook for selecting state
export const useAppSelector = (selector) => {
  return useSelector(selector);
};
