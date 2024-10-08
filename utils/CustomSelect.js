import React, { useState } from 'react';
import styles from './CustomSelect.module.css';
import { IconChevronDown, IconArrowDownFromArc } from '@tabler/icons-react';

const CustomSelect = ({ options, defaultValue, onChange }) => {
  const placeholder = { label: 'Select a bank', value: '' };

  const [selected, setSelected] = useState(() => {
    const defaultOption = options.find(option => option.value === defaultValue) || null;
    return defaultOption ? { label: defaultOption.label, value: defaultOption.value } : placeholder;
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    if (option.value === '') {
      return;
    }
    setSelected(option);
    onChange(option.value);
    setIsOpen(false);
  };

  return (
    <div className={styles.customSelect}>
      <div 
        className={styles.customSelectTrigger} 
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected.label}
        {isOpen ? (
          <IconArrowDownFromArc className={styles.icon} />
        ) : (
          <IconChevronDown className={styles.icon} />
        )}
      </div>
      {isOpen && (
        <div className={`${styles.customOptions} scrollBar`}>
          <div 
            key={placeholder.value} 
            className={`${styles.customOption} ${selected.value === placeholder.value ? styles.active : ''}`}
            onClick={() => handleSelect(placeholder)}
          >
            {placeholder.label}
          </div>
          {options.map((option) => (
            <div 
              key={option.value} 
              className={`${styles.customOption} ${option.value === selected.value ? styles.active : ''}`}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
