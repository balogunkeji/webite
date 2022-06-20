import React, { Dispatch, SetStateAction } from 'react'
import { Section } from '../Box/styles';
import { ModalWrapper } from './style';
import Image from 'next/image';
import { Button } from 'antd';
import router from 'next/router';
import Tick from '../../utilities/SVG/tick.svg';

function FormModal({ modal, setModal }: { modal: boolean, setModal: Dispatch<SetStateAction<boolean>> }) {
  return (
    <ModalWrapper visible={modal}
    footer={null}
    title=''
    centered={true}
    onCancel={() => {
      setModal(false);
    }}>
        <Section flexDir='column' className='section'>
            <Image src={Tick} alt='success' height={40} layout='fixed' width={40}/>
            <h3>Message sent</h3>
            <p>Thanks for reaching out. Your message <br/>will be replied shortly.</p>
            <Button type='text' onClick={() => router.push('/')}>Go Home</Button>
        </Section>
    </ModalWrapper>
  )
}

export default FormModal