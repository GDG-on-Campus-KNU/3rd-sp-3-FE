import { CollabInitPage } from './../../../pages/CollabInitPage/ui/index';
import { create } from 'zustand';
import { PageNumber } from './types';
import { devtools } from 'zustand/middleware';

export const useCollabStore = create<PageNumber>()(
	devtools((set) => ({
		pageNumber: 0,
		nextPage: () => set((state) => ({ pageNumber: state.pageNumber + 1 })),
		prevPage: () => set((state) => ({ pageNumber: state.pageNumber - 1 })),
	}))
);

interface ComponentStoreState {
	data: string | null;
	componentState: 'INIT' | 'NAVIGATE' | 'WRITE';
}

export const useComponentStore = create<ComponentStoreState>()((set) => ({
	data: null,
	componentState: 'INIT',
	setDate: (data: string) => set({ data }),
	setComponentState: (componentState: 'INIT' | 'NAVIGATE' | 'WRITE') =>
		set({ componentState }),
}));

const componentState: 'INIT' | 'NAVIGATE' | 'WRITE' = 'INIT';

function changeState(state: typeof componentState) {
	switch (state) {
		case 'INIT':
			return <CollabInitPage />;
		case 'NAVIGATE':
			return <DocumentNavigate />;
		case 'WRITE':
			return <DocumentSpace />;
		default:
			return <CollabInitPage />;
	}
}

// export const useCollabStore = create(devtools(store));
