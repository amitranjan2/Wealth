import Skeleton from 'react-loading-skeleton';

const SkeletonLoader = () => {
  return (
    <div>
      <Skeleton height={100} width={200} />
      <Skeleton height={20} width={150} style={{ marginBottom: 10 }} />
      <Skeleton count={3} height={20} style={{ marginBottom: 10 }} />
    </div>
  );
};

export default SkeletonLoader;
