import { MemberProfile } from './_components/MemberProfile';

export default function Page({ params }: { params: { id: number } }) {
  const { id } = params;
  return <MemberProfile memberId={id} />;
}
