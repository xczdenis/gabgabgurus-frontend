import { MemberProfile } from './_components/MemberProfile';

export default async function Page(props: { params: Promise<{ id: number }> }) {
  const params = await props.params;
  const { id } = params;
  return <MemberProfile memberId={id} />;
}
