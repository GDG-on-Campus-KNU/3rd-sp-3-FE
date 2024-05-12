import { DocumentNavigate } from '@/pages/CollabSpace/DocumentNavigate/ui';
import { ChannelWidget } from '@/widgets/ChannelSpace/ChannelWidget';
import * as Styles from './styles';
import { DocumentSpace } from '@/pages/CollabSpace/DocumentSpace';
import { CollabNavigate } from '@/pages/CollabNavigate/ui';
import { useState } from 'react';
// import { CollabSpace } from '@/widgets/Collabpace';

export const HomePage: React.FC = () => {
	// const [isDocumentSpace, setIsDocumentSpace] = useState(true);

	return (
		<>
			<Styles.HomePageLayout>
				<Styles.Channel>
					<ChannelWidget />
				</Styles.Channel>
				<Styles.Menu>Menu Section</Styles.Menu>
				<Styles.CollabSpace>
					{/* <CollabNavigate /> */}
					<DocumentNavigate />
				</Styles.CollabSpace>
				<Styles.ChatRoom>ChatRoom Section</Styles.ChatRoom>
			</Styles.HomePageLayout>
		</>
	);
};
