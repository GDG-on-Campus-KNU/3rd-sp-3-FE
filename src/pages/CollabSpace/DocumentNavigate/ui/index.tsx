import { useState } from 'react';
import {
	DocumentSection,
	TitleText,
	SubTitleText,
	ContentSection,
	DocumentTItle,
	DocumentDate,
} from './styles';
// import { First } from '../../DocumentSpace/ui/First';
// import { Second } from '../../DocumentSpace/ui/Second';
import { useCollabStore } from '@/features/Collab/model/store';

export const DocumentNavigate: React.FC = () => {
	// const [document, setDocument] = useState<string | null>(null);
	// const { pageNumber, nextPage, prevPage } = useCollabStore((state) => state);
	const [number, setNumber] = useState<number>(0);

	const pageNumber = useCollabStore((state) => state.pageNumber);
	const nextPage = useCollabStore((state) => state.nextPage);
	const prevPage = useCollabStore((state) => state.prevPage);

	const handlerDocument = (
		event: React.MouseEvent<HTMLElement, MouseEvent>
	) => {
		console.log(event.target as HTMLElement);
		console.log(nextPage(pageNumber + 1));
	};

	return (
		<>
			<TitleText>소쿠리님, 프로젝트1 채널에 오신것을 환영합니다.</TitleText>
			<SubTitleText>최근 문서</SubTitleText>
			<ContentSection>
				<DocumentSection onClick={() => nextPage(pageNumber + 1)}>
					<DocumentTItle>문서 1</DocumentTItle>
					<DocumentDate>5월 5일</DocumentDate>
					<p>{pageNumber}</p>
				</DocumentSection>
				<DocumentSection>
					<DocumentTItle>문서 1</DocumentTItle>
					<DocumentDate>5월 5일</DocumentDate>
				</DocumentSection>
				<DocumentSection>
					<DocumentTItle>문서 1</DocumentTItle>
					<DocumentDate>5월 5일</DocumentDate>
				</DocumentSection>
			</ContentSection>
			<SubTitleText>즐겨찾기</SubTitleText>
			<ContentSection>
				<DocumentSection>
					<DocumentTItle>문서 1</DocumentTItle>
					<DocumentDate>5월 5일</DocumentDate>
				</DocumentSection>
				<DocumentSection>
					<DocumentTItle>문서 1</DocumentTItle>
					<DocumentDate>5월 5일</DocumentDate>
				</DocumentSection>
				<DocumentSection>
					<DocumentTItle>문서 1</DocumentTItle>
					<DocumentDate>5월 5일</DocumentDate>
				</DocumentSection>
			</ContentSection>
		</>
	);
};
