import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '.';

export const useAppDiespatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
