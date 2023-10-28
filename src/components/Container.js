import ErradicaoDaPobreza from "../img/erradicaoDaPobreza.png";
import EducacaoDeQualidade from "../img/educacaoDeQualidade.png";
import CidadesEComunidades from "../img/cidadesEComunidades.png";
import Parcerias from "../img/parcerias.png";
import ConsumoEProducao from "../img/consumoEProducao.png";
import IndustriaEInovacao from "../img/industriaEInovacao.png";
import TrabalhoDecente from "../img/trabalhoDecente.png";

import Divisao from "./Divisao";
import Paragrafo from "./Paragrafo";
import Titulo from "./Titulo";
import Map from "./Map";
import Imagem from "./Imagem";

function Container() {
  return (
    <div className="h-full m-8 flex flex-col gap-y-6">
      <main className="flex flex-col gap-y-6">
        <Titulo titulo="Objetivos de Desenvolvimento Sustentável" />
        <Paragrafo
          msg="Os Objetivos de Desenvolvimento Sustentável são um apelo global
      à ação para acabar com a pobreza, proteger o meio ambiente e o clima e garantir
      que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade.
      Estes são os objetivos para os quais as Nações Unidas estão contribuindo a fim de
      que possamos atingir a Agenda 2030 no Brasil."
        />
      </main>
      <Divisao />
      <Titulo titulo="Onde Estamos?" />
      <div className="w-full h-[400px]">
        <Map />
      </div>
      <Titulo titulo="Objetivos Envolvidos no Ai Lixo:" />
      <div className="flex">
        <Imagem
          background="bg-[#E5243B]"
          numero="1"
          titulo="Erradicação da pobreza"
          minImg={ErradicaoDaPobreza}
          alt="Familia"
        />
        <Paragrafo msg="Reduzir pelo menos à metade a proporção de homens,
         mulheres e crianças, de todas as idades, que vivem na pobreza, 
         em todas as suas dimensões, de acordo com as definições nacionais." />
      </div>
      <div className="flex flex-row-reverse">
        <Imagem
          background="bg-[#C5192D]"
          numero="4"
          titulo="Educação de qualidade"
          minImg={EducacaoDeQualidade}
          alt="Educação"
        />
        <Paragrafo msg="Garantir o acesso à educação inclusiva, de qualidade e equitativa,
         e promover oportunidades de aprendizagem ao longo da vida para todos"/>
      </div>
      <div className="flex">
        <Imagem
          background="bg-[#A21942]"
          numero="8"
          titulo="Trabalho decente e crescimento econômico"
          minImg={TrabalhoDecente}
          alt="Trabalho"
        />
        <Paragrafo msg="Promover o crescimento econômico inclusivo e sustentável, 
        o emprego pleno e produtivo e o trabalho digno para todos"/>
      </div>
      <div className="flex flex-row-reverse">
        <Imagem
          background="bg-[#FD6925]"
          numero="9"
          titulo="Indústria, inovação e infraestrutura"
          minImg={IndustriaEInovacao}
          alt="III"
        />
        <Paragrafo msg="Construir infraestruturas resilientes,
         promover a industrialização inclusiva e sustentável e fomentar a inovação"/>
      </div>
      <div className="flex">
        <Imagem
          background="bg-[#FD9D24]"
          numero="11"
          titulo="Cidades e comunidades sustentáveis"
          minImg={CidadesEComunidades}
          alt="Cidades"
        />
        <Paragrafo msg="Tornar as cidades e comunidades mais inclusivas, seguras, resilientes e sustentáveis"/>
      </div>
      <div className="flex flex-row-reverse">
        <Imagem
          background="bg-[#BF8B2E]"
          numero="12"
          titulo="Consumo e produção responsáveis"
          minImg={ConsumoEProducao}
          alt="Consumo"
        />
        <Paragrafo msg="Garantir padrões de consumo e de produção sustentáveis"/>
      </div>
      <div className="flex">
        <Imagem
          background="bg-[#19486A]"
          numero="17"
          titulo="Parcerias e meios de implementação"
          minImg={Parcerias}
          alt="Parcerias"
        />
        <Paragrafo msg="Reforçar os meios de implementação e revitalizar a parceria global para o desenvolvimento sustentável"/>
      </div>
    </div>
  );
}

export default Container;
