import { CollabSpace } from '@/widgets/CollabSpace';
import { DocumentNavigate, DocumentNumber, NavigateSection } from './styles';

export const DocumentSpace: React.FC = () => {
	return (
		<>
			<NavigateSection>
				<DocumentNavigate>프로젝트 채널 1</DocumentNavigate>
				<DocumentNumber> / 문서</DocumentNumber>
			</NavigateSection>
			<CollabSpace />
		</>
	);
};
