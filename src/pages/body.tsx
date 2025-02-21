import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ITopicData } from "../models/topic-data-model";
import { ISubTopic } from "../models/subtopic-model";

const Body: React.FC = () => {
  const [data, setData] = useState<ISubTopic | null>(null);
  const { topic, subtopic } = useParams();

  useEffect(() => {
    fetch("/Data/slidebarData.json")
      .then((res) => res.json())
      .then((Data) => {
        if (!Data) throw new Error();
        const currentTopic: ITopicData[] = Data.sidebar.filter(
          (item: ITopicData) => item.name === topic
        );
        const currentSubTopic: ISubTopic[] = currentTopic[0].Children.filter(
          (item: ISubTopic) => item.name === subtopic
        );
        setData(currentSubTopic[0]);
        console.log(currentSubTopic);
      })
      .catch((error) => console.log(error));
  }, [subtopic]);
  return (
    <div className="overflow-hidden">
      {data ? (
        <p className="text-justify px-4 md:pl-24 md:pr-48 text-gray-300">
          {data.description}
        </p>
      ) : (
        <>
          <h2 className="text-2xl px-4 pt-4 pb-6">This is demo Topic</h2>
          <p className="text-justify px-4 md:pl-24 md:pr-48 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam in
            possimus esse ut id quasi expedita, atque sequi nobis nihil soluta
            eum eius, alias vero aperiam dolorem qui voluptatem perspiciatis
            beatae recusandae, ea et dolorum facilis! Iure nisi dolores saepe
            suscipit doloremque totam commodi cumque adipisci aliquid quo? Qui
            quisquam magni, quae inventore cumque molestias quibusdam commodi
            temporibus! Eum dolor nisi corrupti iure unde? Consectetur similique
            beatae, temporibus fugiat, aliquam unde hic soluta rerum quasi
            nostrum nihil. Quod architecto earum incidunt delectus veniam
            voluptas maiores dolorem dolor dolore repudiandae. Fuga, harum ad
            quaerat eum cum error itaque saepe temporibus minus? Quos suscipit
            ullam magni cum reprehenderit ad totam quod eveniet iste velit nam
            eos, ratione exercitationem illo provident pariatur delectus
            perferendis repellat consequatur iusto. Quam illo ipsa incidunt
            atque numquam. Officia nihil doloribus deserunt ut quos suscipit
            fugiat corrupti ipsam exercitationem illum omnis labore distinctio,
            quia ab fuga, quas ullam quam dolorem provident maxime? Quibusdam
            delectus sequi ut nemo minus illo esse praesentium laudantium
            eveniet ullam, soluta suscipit. Molestiae nihil, provident laborum
            recusandae nam iusto perferendis et quo deleniti ab temporibus odio!
            Nulla quam dolor, fugiat id neque sint est, error atque distinctio
            facere ratione harum velit blanditiis voluptate! Cumque et mollitia
            voluptas cum fugit minima libero nesciunt aliquam laborum at
            consequuntur corrupti voluptatum, asperiores accusamus inventore
            voluptates consequatur blanditiis unde aperiam odit praesentium
            nulla? Quae ipsam fugit perferendis nemo, facilis id harum modi,
            dolore dicta hic accusantium! Deserunt doloremque quae voluptatem
            quibusdam, culpa in illum earum corporis, optio eligendi ipsum
            laboriosam modi officiis explicabo veritatis aperiam! Eius debitis
            fugit nostrum a! Et delectus id doloribus, molestias nemo incidunt
            animi esse dolores iusto quae. Delectus, dignissimos fugiat corrupti
            corporis harum asperiores et dolorum debitis culpa facere assumenda
            aut dolore nam a voluptatum doloribus molestias, ratione nostrum
            incidunt illo, quo suscipit eius. Aperiam, mollitia sed,
            necessitatibus quisquam ex eos facere qui harum, iusto tempore
            voluptatem. Porro illum sint alias tempora similique aut accusamus
            ullam dolorum quam pariatur labore provident harum ipsum laudantium
            doloremque doloribus, ipsa est aperiam quidem! Explicabo ratione
            veritatis dicta optio dolore eveniet aliquam officiis nulla
            reprehenderit beatae vitae tempore facere nesciunt sint minima
            recusandae nihil, omnis aliquid exercitationem? Illo fuga eum
            explicabo ex alias? Iusto asperiores rem consequatur perspiciatis
            laudantium doloribus earum possimus sapiente, maxime dolorem
            veritatis nam iure ullam dolores similique praesentium voluptatum,
            in aspernatur et? Nisi nam ut numquam expedita exercitationem unde
            corrupti harum consequuntur a tempore. Tenetur maiores beatae,
            perspiciatis culpa voluptatem quae! Placeat corporis, cumque
            incidunt autem unde tenetur aperiam dolorem facilis ipsam corrupti
            voluptate quis, fuga nobis. Aspernatur est accusamus eveniet
            explicabo doloremque obcaecati id dicta repellat qui porro quibusdam
            animi asperiores, reiciendis quo dolores expedita quaerat ipsam a,
            dolorem aut minus voluptates. Deserunt illum officiis expedita
            aliquid tenetur obcaecati? Quasi, exercitationem! Nisi et iste odit,
            blanditiis, dicta maxime dolor sint dignissimos est accusantium
            ipsum incidunt necessitatibus rem distinctio praesentium officiis
            ab. Eaque, rerum? Error accusantium tenetur debitis vero aperiam
            fuga voluptatum animi expedita esse quia? Placeat sed explicabo modi
            facilis ducimus. Quisquam, totam laudantium! Numquam corporis
            perspiciatis amet vel, impedit ipsum molestiae aliquam reprehenderit
            quia iste quam facere asperiores sapiente aspernatur alias error
            omnis? Maiores doloribus harum, ipsum repellat architecto id ex
            excepturi est fugiat possimus sequi mollitia tempore aperiam cum sed
            deserunt sapiente neque odit molestiae voluptatibus quibusdam
            adipisci, quo autem. Odio perspiciatis ipsam animi porro iste
            praesentium, nostrum sit hic odit ducimus minus ipsa explicabo
            laudantium inventore. Rem facilis et consequuntur similique sunt,
            expedita error perspiciatis quos velit nisi aspernatur fugiat ad
            asperiores? In nisi ex est dolorem quibusdam doloremque modi quae
            aperiam. Dicta iste autem necessitatibus suscipit amet, iure facilis
            exercitationem quia odit commodi eum ex ipsam saepe, nostrum cum
            fugit neque tenetur voluptas incidunt voluptatum quidem et
            consequuntur. Hic quam cum necessitatibus optio dolorum ea nobis
            veniam est voluptatem repellendus soluta asperiores reiciendis quasi
            cupiditate ipsum dicta voluptatum, eum dolor rerum, quos ab facilis
            corporis vero beatae! Sequi laborum quibusdam, blanditiis maiores
            placeat magni minus eius quisquam molestiae. Magnam corporis odit
            exercitationem voluptatum recusandae, vel, est, fugiat ab temporibus
            voluptas excepturi? Obcaecati quam facere voluptatibus fugiat eum,
            ipsam aliquam nihil nulla porro explicabo quos sit. Placeat expedita
            dolorem, suscipit praesentium impedit error, unde, eveniet facere
            cupiditate consectetur porro cumque sint. Fugiat exercitationem
            ipsam odio eaque dolore necessitatibus non nam, veritatis expedita
            inventore quibusdam quam, quae voluptatibus earum ratione soluta
            quis facere explicabo libero eum aperiam? Mollitia nam vero ipsam
            laudantium id quod, facere saepe odio, ab modi voluptatibus! Quos
            doloremque ducimus sequi unde fuga laudantium illum, quod possimus
            culpa eligendi vero temporibus nesciunt ullam ab amet deleniti iusto
            eos harum mollitia dignissimos perferendis saepe. Ratione earum
            dolorem reiciendis suscipit maxime. Accusantium repellat eveniet
            tempore distinctio aut laudantium itaque assumenda, corporis, error
            veniam impedit? Sit, id animi. Dolorem laborum aperiam recusandae
            quos! Error quisquam pariatur mollitia velit nihil at aspernatur
            soluta. Sunt nemo voluptate aspernatur consequuntur suscipit qui
            dicta voluptates impedit sequi consectetur, perspiciatis accusamus
            dignissimos natus ad et. Exercitationem commodi vel laborum ullam
            accusamus qui consequatur obcaecati a voluptate. Nisi dignissimos
            recusandae, excepturi magnam officiis beatae nemo ipsum repellat
            aliquid ut soluta explicabo iure asperiores aspernatur distinctio
            atque ea cum temporibus non officia et ab. Obcaecati facere saepe
            nemo magni, hic architecto debitis eum, aspernatur quidem tempora
            placeat voluptates, eligendi quae nulla enim! Eaque eveniet, quae
            nulla laborum dolor numquam similique neque maxime nesciunt sequi
            libero ipsa aliquam iusto distinctio iste veniam sint possimus
            recusandae voluptate a. Quis possimus praesentium deleniti animi
            debitis eos facilis doloremque quia architecto at quos eius nobis
            cumque vero dolorum aspernatur doloribus ipsum, error excepturi?
            Reiciendis consectetur similique quasi, facere quos quam? Modi
            repellendus recusandae doloribus libero iure a fuga veritatis
            inventore temporibus. Eveniet, architecto hic! Ea expedita omnis
            eveniet sunt nemo sit porro cumque nesciunt, veniam quisquam error
            doloribus commodi. Ullam quo nesciunt consequatur fuga repellat
            error culpa nemo ipsum quam, eligendi vel enim aliquid minima
            quibusdam ducimus voluptas ratione porro, harum aspernatur eos odio
            sed? Consequuntur perspiciatis aliquam sint quasi, aspernatur
            reprehenderit culpa excepturi quod eveniet error aliquid perferendis
            ex vel?
          </p>
        </>
      )}
    </div>
  );
};

export default Body;
