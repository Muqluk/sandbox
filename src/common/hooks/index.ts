import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { APP_STATE, AppDispatch } from 'src/app-base/state/store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<APP_STATE> = useSelector;
