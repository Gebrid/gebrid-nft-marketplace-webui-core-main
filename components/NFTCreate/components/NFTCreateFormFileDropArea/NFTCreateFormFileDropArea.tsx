import { accept } from 'consts/consts';
import Image from 'next/image';
import Dropzone from 'react-dropzone';
import { Controller } from 'react-hook-form';
import ReactPlayer from 'react-player';
import { connect } from 'react-redux';
import { Register } from 'types/formSchemaType';
import { File } from '../../functions';
import AudioPlayer from '../Audio/AudioPlayer';
import { StyledButtonGradient } from '../Buttons/ButtonGradient/StyledButtonGradient';
import { StyledNFTCreateFormFileDropArea } from './StyledNFTCreateFormFileDropArea';

export type FileWithPreview = File & { preview: string };

type Props = {
  theme: string | 'theme-light' | 'theme-dark';
  name: any;
  isPreview: boolean;
};

type NFTCreateFormFileDropAreaProps = Props & Register;

function NFTCreateFormFileDropArea({
  theme,
  control,
  name,
  isPreview = false,
}: NFTCreateFormFileDropAreaProps) {
  return (
    <StyledNFTCreateFormFileDropArea theme={theme} isPreview={isPreview}>
      <Controller
        control={control}
        name={name}
        defaultValue={[]}
        render={({ field: { onBlur, onChange, value } }) => (
          <Dropzone
            accept={accept}
            onDrop={(value) => {
              try {
                onChange(value);
                Object.assign(value[0], {
                  preview: URL.createObjectURL(value[0]),
                });
              } catch (err) {
                console.log(err);
              }
            }}
          >
            {({ getInputProps, getRootProps }) => (
              <div
                {...getRootProps({
                  className:
                    'fileDropArea ' +
                    ' ' +
                    (theme == 'theme-dark' ? 'dark' : 'light'),
                })}
              >
                <input {...getInputProps()} onBlur={onBlur} name={name} />
                <div id="dropAreaContent" className={'dropAreaContent'}>
                  {value[0]?.preview &&
                  value[0]?.type?.includes('image' || 'video') ? (
                    <span className={'fileDropAreaPreview'}>
                      <Image
                        src={value[0]?.preview}
                        width={250}
                        height={250}
                        alt=""
                      />
                    </span>
                  ) : value && value[0]?.type?.includes('audio') ? (
                    <AudioPlayer audioData={value[0]} />
                  ) : value && value[0]?.type?.includes('video') ? (
                    <>
                      <ReactPlayer
                        width={250}
                        height={250}
                        url={value[0]?.preview}
                      />
                    </>
                  ) : (
                    <>
                      {isPreview ? (
                        <Image
                          src={
                            '/images/icons/icon-image-' +
                            (theme == 'theme-dark' ? 'dark' : 'light') +
                            '.svg'
                          }
                          width={92}
                          height={92}
                          alt=""
                        />
                      ) : (
                        <p className={'fileDropAreaDescription'}>
                          PNG, GIF, WEBP, JPEG or MP3. Max 100mb.
                        </p>
                      )}
                      <StyledButtonGradient type="button">
                        Choose file
                      </StyledButtonGradient>
                    </>
                  )}
                </div>
              </div>
            )}
          </Dropzone>
        )}
      />
      {isPreview && (
        <>
          <p className={'previewDropAreaDescription'}>
            Upload file to preview <br /> your brand new NFT
          </p>
          <p className={'previewDropAreaFileTypes'}>
            File types supported{' '}
            <Image
              src={
                '/images/icons/icon-warning-circle-' +
                (theme == 'theme-dark' ? 'dark' : 'light') +
                '.svg'
              }
              width={16}
              height={16}
              alt=""
            />
          </p>
        </>
      )}
    </StyledNFTCreateFormFileDropArea>
  );
}

function mapStateToProps(state: any) {
  return {
    theme: state['layout/theme'].theme,
  };
}

export default connect(mapStateToProps)(NFTCreateFormFileDropArea);
