import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Car from "../img/olur.png";
import { HiMiniChevronRight, HiOutlineInformationCircle, HiOutlinePhoneArrowUpRight } from "react-icons/hi2";

interface AplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AplicationModal: React.FC<AplicationModalProps> = ({ isOpen, onClose }) => {
    const handleLinkClick = () => {
      onClose();
    };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: '40%' }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', stiffness: 250, damping: 20 }}
          className="fixed inset-0 bg-gray-50 border rounded-t-xl border-gray-300 z-10 overflow-y-auto"
        >
          <div className="h-2/4 px-4 overflow-y-auto">
            <div className="mt-6">
              <span className="text-lg font-semibold block mb-4"></span>
              <ul className="space-y-4 font-semibold text-base">
              <li className="w-full">
                    <div className="block p-3 shadow-md border shadow-gray-300  rounded">
                      <div className='flex items-center'>
                      <Image
                        className='w-full rounded-full'
                        src={Car}
                        alt="Arabaprime logo"
                        draggable="false"
                    />
                      </div>
                    </div>
                </li>
                <li className="w-full">
                  <Link href="/hakkimizda" onClick={handleLinkClick}>
                    <div className="block text-gray-800 bg-white p-3 shadow-md border shadow-gray-300 rounded">
                      <div className='flex items-center'>
                        <HiOutlineInformationCircle className='mr-3 w-7 h-7'/>
                        <span>Hakkımızda</span>
                        <HiMiniChevronRight className='ml-auto w-8 h-8 text-gray-600'/>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="w-full">
                  <Link href="/bizeulasin" onClick={handleLinkClick}>
                    <div className="block text-gray-800 bg-white p-3 shadow-md border shadow-gray-300  rounded">
                      <div className='flex items-center'>
                        <HiOutlinePhoneArrowUpRight className='mr-4 w-6 h-6'/>
                        <span>Bize Ulaşın</span>
                        <HiMiniChevronRight className='ml-auto w-8 h-8 text-gray-600'/>
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AplicationModal;
