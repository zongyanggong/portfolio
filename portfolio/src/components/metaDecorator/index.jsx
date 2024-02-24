import { Helmet } from "react-helmet";
// import { useLocation } from "react-router-dom";

const MetaDecorator = ({ title, description }) => {
  // const { pathname } = useLocation();
  // const { origin } = window.location;
  const metaTitle =
    title || "大声 - 大聲 - Dasheng 自由体面美的华语精神文化生活";
  const metaDescription =
    description ||
    "大声一个自由创作、分享和交流的内容社区，致力于向全球华语受众提供自由表达空间、新闻策展内容、共创生态环境，以及无审查的图书和电影资讯，构建自由、丰富、有尊严的华语精神生活，维护体面与美的华语文化圈层。";
  const metaImage =
    "https://cascadevalleydesigns.com/wp-content/uploads/2019/09/How-to-Fix-Facebook-Link-Preview.png";
  // const metaUrl = `${origin}${pathname}${window.location.search}`;
  return (
    <Helmet>
      <title>{metaTitle}</title>
      {/* <meta name="title" content={metaTitle} /> */}
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      {/* <meta property="og:url" content={metaUrl} /> */}
      <meta property="og:url" content={"http://http://138.197.44.229/"} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
    </Helmet>
  );
};

export default MetaDecorator;
