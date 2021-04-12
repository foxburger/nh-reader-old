import Image from 'next/image'
import Head from 'next/head'
import Nhentai from '../components/nhentai'
import styles from '../styles/Reader.module.css'

function Page({ metadata }) {
  if (metadata.content.status == 404){
    return (
      <>
        <h1>404 Not Found</h1>
      </>
    )
  } else {
    return (
      <>
      <Head>
        <title>{metadata.content.title_en}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.metadata}>
          <p>{metadata.content.title_en}</p>
        </div>
        {metadata.content.page.map( (data, index) => 
            <div className={styles.img} key={index}>
            <Image 
              src={"/api/img/" + metadata.content.media_id.toString() + "/" + (index+1) + "." + data.media_type}
              alt={"/api/img/" + metadata.content.media_id.toString() + "/" + (index+1) + "." + data.media_type}
              layout="responsive"
              width={data.media_width}
              height={data.media_height}
              unoptimized>
            </Image>
          </div>
        )}
      </div>
      </>
    )
  }
}

export async function getServerSideProps({
  params: {
    code
  }
}) {
  const metadata = await Nhentai(code)
  if (metadata.status == 404) {
    return { notFound: true }
  } else {
    return { props: { metadata } }
  }
}

export default Page