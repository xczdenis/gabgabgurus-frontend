import { getLanguageLevelRepr } from '@/lib/utils/get-language-level-repr';
import { Tooltip } from '@mui/material';
import { TProps } from './types';

const LanguageLevelIcon = (props: TProps) => {
  const { level } = props;
  const totalBlocks = 5;
  const filledBlocks = level;

  return (
    <Tooltip title={getLanguageLevelRepr(level)} placement="top">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {[...Array(totalBlocks)].map((_, index) => (
          <div
            key={index}
            style={{
              width: '5px',
              height: '10px',
              borderRadius: '2px',
              marginRight: '1px',
              backgroundColor: index < filledBlocks ? '#10B981' : '#d4d5d9',
            }}
          />
        ))}
      </div>
    </Tooltip>
  );
};

export default LanguageLevelIcon;
