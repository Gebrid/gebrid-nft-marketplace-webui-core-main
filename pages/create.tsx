import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import Modal from 'components/UI/Modal/Modal';
import { ModalLoading } from 'components/UI/ModalContent/Loading';
import { useCreate } from 'hooks/useCreate';
import { useDisableInputScroll } from 'hooks/useDisableInputScroll';
import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { formSchema, FormValues } from 'types/formSchemaType';
import { IUserSession } from 'types/types';
import { StyledButtonGradient } from '../components/NFTCreate/components/Buttons/ButtonGradient/StyledButtonGradient';
import NFTCreateFormControlBlockchain from '../components/NFTCreate/components/NFTCreateFormControlBlockchain';
import NFTCreateFormControlCategory from '../components/NFTCreate/components/NFTCreateFormControlCategory';
import NFTCreateFormControlDescription from '../components/NFTCreate/components/NFTCreateFormControlDescription';
import NFTCreateFormControlLicenceType from '../components/NFTCreate/components/NFTCreateFormControlLicenceType';
import NFTCreateFormControlName from '../components/NFTCreate/components/NFTCreateFormControlName';
import NFTCreateFormControlNumberOfCopies from '../components/NFTCreate/components/NFTCreateFormControlNumberOfCopies';
import NFTCreateFormControlPrice from '../components/NFTCreate/components/NFTCreateFormControlPrice';
import NFTCreateFormControlRoyalty from '../components/NFTCreate/components/NFTCreateFormControlRoyalty';
import NFTFileDropArea from '../components/NFTCreate/components/NFTCreateFormFileDropArea/NFTCreateFormFileDropArea';
import styles from '../components/NFTCreate/styles/CreateNFT.module.scss';

type Props = {
  theme: string | 'theme-tight' | 'theme-dark';
  user: IUserSession;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);

  // redirect if not authenticated
  if (!session) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    };
  }

  return {
    props: { user: session.user },
  };
}

function CreateNFT({ user, theme }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    getValues,
    clearErrors,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      licenseType: 'single',
      numberOfCopies: 1,
      price: 0,
      royalty: 0,
    },
    resolver: zodResolver(formSchema),
  });

  const { name, numberOfCopies, price, file, description } = watch();

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const resetForm = () => {
    reset();
    clearErrors();
  };

  const {
    createCollection,
    createData,
    createStatus,
    createError,
    createTxData,
    createTxStatus,
    createTxError,
    addObjectsData,
    addObjectsStatus,
    addObjectsTxData,
    addObjectsTxStatus,
    addObjectsTxError,
  } = useCreate({
    name,
    numberOfCopies,
    description,
    price,
    resetForm,
    file,
    closeModal,
  });
  const isMultiple = watch('licenseType') === 'multiple';

  const errorStyle = { color: 'red' };

  const onSubmit = async (data: any) => {
    try {
      console.log('form data', data);
      setIsOpen(true);

      await createCollection?.();
    } catch (error) {
      setTimeout(() => {
        closeModal();
      }, 3000);

      console.error(`'form submit: ${errors}`);
    }
  };

  useDisableInputScroll();

  return (
    <>
      <Head>
        <title>Create NFT | Gebrid NFT</title>
      </Head>

      <Form
        encType="multipart/form-data"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <Container className={styles.wrapper}>
          <Row>
            <Col lg={12}>
              <h1 className={styles.title}>
                Create New <span className={styles.gradient}>NFT</span>
              </h1>
            </Col>
          </Row>
          <Row className={styles.formWrapper}>
            <Col lg={5} md={12}>
              <Form.Group className={styles.formGroup}>
                <NFTFileDropArea
                  name="file"
                  control={control}
                  isPreview={true}
                />
              </Form.Group>

              <ErrorMessage
                errors={errors}
                name="file"
                render={({ message }) => <p style={errorStyle}>{message}</p>}
              />
            </Col>
            <Col lg={7} md={12}>
              <NFTCreateFormControlName errors={errors} register={register} />
              <ErrorMessage
                errors={errors}
                name="name"
                render={({ message }) => <p style={errorStyle}>{message}</p>}
              />

              <NFTCreateFormControlLicenceType
                //@ts-ignore
                name={'licenseType'}
                control={control}
              />

              {isMultiple && (
                <>
                  <NFTCreateFormControlNumberOfCopies register={register} />
                  <ErrorMessage
                    errors={errors}
                    name="numberOfCopies"
                    render={({ message }) => (
                      <p style={errorStyle}>{message}</p>
                    )}
                  />
                </>
              )}

              <Form.Group controlId="file" className={styles.formGroup}>
                <Form.Label className={styles.label}>Upload file</Form.Label>
                <NFTFileDropArea
                  isPreview={false}
                  name="file"
                  control={control}
                />
              </Form.Group>

              <NFTCreateFormControlCategory
                name={'category'}
                control={control}
              />
              <ErrorMessage
                errors={errors}
                name="category"
                render={({ message }) => <p style={errorStyle}>{message}</p>}
              />
              <NFTCreateFormControlDescription register={register} />
              <ErrorMessage
                errors={errors}
                name="description"
                render={({ message }) => <p style={errorStyle}>{message}</p>}
              />

              <NFTCreateFormControlBlockchain control={control} />
              <ErrorMessage
                errors={errors}
                name="blockchain"
                render={({ message }) => <p style={errorStyle}>{message}</p>}
              />

              <NFTCreateFormControlPrice
                register={register}
                price={watch('price')}
              />
              <ErrorMessage
                errors={errors}
                name="price"
                render={({ message }) => <p style={errorStyle}>{message}</p>}
              />
              {/* <NFTCreateFormControlCharity /> */}

              <NFTCreateFormControlRoyalty register={register} />
              <ErrorMessage
                errors={errors}
                name="royalty"
                render={({ message }) => <p style={errorStyle}>{message}</p>}
              />

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <StyledButtonGradient
                  type="submit"

                  //disabled={!create || isSuccess || isLoading}
                >
                  Create NFT
                </StyledButtonGradient>
                {/* <StyledButtonGradient onClick={resetForm}>
                  Clear
                </StyledButtonGradient> */}
              </div>
            </Col>
          </Row>
        </Container>
      </Form>

      <Modal canClose handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        {createStatus === 'loading' ||
        addObjectsStatus === 'loading' ||
        createTxStatus === 'loading' ||
        addObjectsStatus !== 'error' ? (
          <ModalLoading theme={theme} />
        ) : (
          <h2>Oops...</h2>
        )}
      </Modal>
    </>
  );
}

function mapStateToProps(state: any) {
  return {
    theme: state['layout/theme'].theme,
  };
}

export default connect(mapStateToProps)(CreateNFT);
