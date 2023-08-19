import { DummyItem } from "./SkeletonUI.styled";

function SkeletonUI() {
  return (
    <>
      {[...Array(20).keys()].map((_: number, index: number) => {
        return (
          <DummyItem key={`dummy-${index}`}>
            <div className="content" />
            <div className="top" />
            <div className="bottom" />
          </DummyItem>
        );
      })}
    </>
  );
}

export default SkeletonUI;
