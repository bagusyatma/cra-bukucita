import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getBooks, getCategories } from "../../service/book";

const Pustaka = () => {
  const [books, setBooks] = useState();
  const [categories, setCategories] = useState();

  const [params, setParams] = useState({ page: 0, size: 10 });
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const fetchCategory = async () => {
    const categories = getCategories();
    setCategories(categories);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchBook = async (categoryId, params) => {
    try {
      const response = await getBooks({ categoryId, ...params });
      console.log(response);
    } catch (error) {
      console.log(error.response);
    }
  };

  const clickCategory = (id) => {
    if (id) fetchBook(id, params);
  };

  return (
    <div className="h-full overflow-y-auto">
      <div className="sticky top-0 mb-2 bg-gray-50 p-1">
        <div className="flex pb-2">
          <input type="text" className="flex-1 px-4 py-2 rounded-lg focus:outline-none focus:shadow" placeholder="Cari buku..." />
          <button className="px-4 py-2 bg-violet-500 text-white rounded-lg ml-3 shadow">
            <FaSearch />
          </button>
        </div>
        <div className="flex overflow-x-auto whitespace-nowrap">
          {categories &&
            categories.map((item) => (
              <div key={item.name} className="px-3 py-1 my-1 mx-2 bg-purple-100 rounded-lg cursor-pointer" onClick={() => clickCategory(item.id)}>
                {item.name}
              </div>
            ))}
        </div>
      </div>
      <div className="w-full h-4/5 overflow-y-auto pr-3">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae quas hic, tenetur rerum nobis ad soluta architecto consequuntur, eligendi
        dolore atque facilis a enim sint exercitationem ut, blanditiis ipsa dignissimos ea suscipit omnis iusto ducimus neque quia? Sint labore veniam neque
        nesciunt. Quam quod provident tenetur optio quaerat quos ipsam rerum maiores, illum eum dicta praesentium nesciunt unde inventore vitae iusto saepe
        voluptatibus accusamus eaque quis tempora dolores eligendi autem temporibus. Magnam ratione voluptate reprehenderit eius ad quae unde maiores quas
        eligendi est earum dolores sequi ipsum, repellendus cum assumenda! Cumque nesciunt reprehenderit dolorem praesentium ratione sequi inventore modi
        doloremque, dicta autem commodi ipsum minima error et quam totam repellendus nobis ipsam, omnis tenetur temporibus libero suscipit a voluptatem! A
        eveniet dolorum ullam tempore architecto fugiat nemo quidem provident, quibusdam, eligendi reprehenderit adipisci ipsam sint veniam! Eius vel
        numquam enim porro blanditiis cumque expedita tempora provident accusantium accusamus non libero repellat quam doloribus ipsam nihil culpa
        obcaecati, officia dolores vitae, beatae error. Aut esse hic beatae facere, molestiae deserunt dolore tenetur culpa, id aliquam ducimus dicta quos
        ratione ea consequuntur tempora nulla? Libero quasi exercitationem nihil aliquam veniam molestias dicta voluptates minus dolore! Voluptate, eius
        enim adipisci, perferendis nesciunt suscipit aperiam architecto quas veritatis voluptas rem itaque vero. Quidem consequatur aperiam dolore incidunt
        hic, fuga error possimus, eos architecto, minima accusamus nisi. Voluptates nisi tempore accusantium quia explicabo doloribus esse adipisci? Aut
        officia officiis assumenda esse, voluptates adipisci sequi vero dolore minus quaerat similique laboriosam, reprehenderit aliquam aliquid cum.
        Molestiae officiis vitae, laboriosam ea unde rerum quod corrupti numquam porro sapiente reiciendis beatae reprehenderit qui minus aliquid eum
        pariatur! Eaque maxime exercitationem ab voluptas consequuntur accusamus dolorum modi, ad assumenda reiciendis similique vero excepturi iusto ut,
        magni tempore, atque harum rerum fugit in tenetur? Recusandae necessitatibus ea quo molestias doloremque quis quod vitae provident rerum accusantium
        illo explicabo eveniet, laborum voluptas cupiditate exercitationem maxime tenetur, esse suscipit! Perferendis cum id excepturi dicta doloremque enim
        odio nihil. Eaque dolore aliquam, temporibus id reprehenderit, quaerat doloremque ipsum amet enim, quibusdam repellat? Aspernatur incidunt,
        temporibus nulla tempore a explicabo placeat adipisci! Consequuntur, ex laborum, similique perspiciatis quisquam ad possimus illo omnis quasi fugit
        culpa reiciendis fuga ipsum recusandae sequi velit ea sint ipsa sed. Nesciunt nisi dolor, non voluptatum possimus, eos quibusdam pariatur enim error
        quae autem unde officiis explicabo assumenda aspernatur fuga distinctio consequuntur doloribus impedit laudantium omnis itaque natus architecto
        dolorum? Beatae, consectetur. Reprehenderit rerum possimus neque a sit. Facere quibusdam iure quidem earum error corporis nobis, hic non autem minus
        architecto at laudantium dolorum illo modi omnis illum, laborum ipsa dolor magnam. Aliquid quidem eius animi placeat ipsam? Ipsum, eligendi?
        Sapiente quia alias reprehenderit eum saepe earum corporis pariatur. Nulla nam atque quam veritatis rerum deserunt numquam eligendi quas error quos
        molestias quae, sapiente ab obcaecati. Architecto quo reprehenderit pariatur, magni earum animi natus dolor voluptatum nesciunt unde suscipit
        aperiam quibusdam ratione fugiat nihil perspiciatis ducimus laudantium sint deserunt iusto rerum ut illo inventore maxime. Ipsam impedit harum
        placeat laudantium vel quaerat debitis, fugiat architecto molestias eveniet? Labore, quas mollitia. Quia rem consequatur ea laborum, aliquam sint
        fugiat explicabo tempora dolores officia quam adipisci fugit maiores itaque necessitatibus similique, labore, corrupti velit quis architecto
        pariatur non eius repellat? Ipsa, explicabo molestias delectus ex distinctio id, accusantium quos animi praesentium voluptate temporibus corporis
        rem. A consequuntur saepe tempore neque harum voluptates voluptatibus, eos autem libero odit? Maxime voluptatem dolorem quidem hic asperiores est,
        error dolor dolorum? Saepe, error accusamus fugit perferendis quaerat ex veritatis quae ab consequatur ratione hic minima similique recusandae iusto
        culpa optio corrupti voluptates ut totam. Ipsa fugiat laboriosam, excepturi dolorem dolorum mollitia? Quasi nostrum in quis. Laboriosam facilis
        magni inventore ut reprehenderit quae quod soluta similique quasi veritatis, beatae autem cum incidunt nisi voluptates fuga asperiores enim nostrum,
        fugit labore repellat, iusto quis. Odit suscipit laborum, harum deserunt iure dicta, voluptates aut iusto cumque quod unde. Debitis tempora labore
        officia, repellendus asperiores doloremque maxime exercitationem sed soluta, consequuntur sapiente, inventore nobis quam nostrum quis corrupti
        aperiam alias aliquid odit sit sunt! Ex quod facere, temporibus obcaecati sapiente, atque nisi quasi, reiciendis cumque sed iste provident? Corrupti
        cumque qui quae hic nobis debitis neque? Rerum ad consectetur provident labore dolorum, architecto at voluptatibus neque excepturi modi quibusdam
        suscipit quod velit nihil ab natus ratione facere, iure vero, maiores dicta adipisci quam. Placeat nisi, fuga facere eius itaque repellendus id.
        Minus incidunt doloribus quasi perspiciatis laborum? Placeat nesciunt nam autem. Possimus id, vero esse labore aperiam corrupti nulla nam incidunt
        consequuntur officiis impedit. Voluptate blanditiis repellat illo fugit autem tenetur ut natus provident, iste deserunt, a ratione quaerat earum
        vero at impedit temporibus quibusdam dignissimos assumenda repudiandae neque tempore error ullam? Illo amet officiis eligendi asperiores
        necessitatibus repellat quia nemo quo. Velit facere possimus, ducimus aperiam corporis vitae omnis provident itaque culpa. Omnis quae animi eum
        molestiae rem sint maiores modi, voluptatum quia possimus iure facilis enim non unde. Suscipit, voluptates. Suscipit necessitatibus quae aspernatur
        esse quia modi amet laboriosam, architecto quod aliquam quidem porro dolor est minus voluptatibus perferendis molestiae, asperiores adipisci animi
        soluta! Labore temporibus quae soluta, aliquam nemo saepe, quasi doloribus, alias eius omnis rem? Neque, id aliquam consectetur, illo explicabo
        similique laboriosam asperiores eligendi magnam facere placeat. Non, quo corporis aut labore molestiae ad eos iste. Tempora sunt commodi vitae
        aspernatur minima porro fugit cumque quisquam nemo. Vero illo et ducimus in perferendis omnis sit sed tempore earum nihil labore facere mollitia
        dolorum, neque aut sapiente quisquam incidunt molestiae unde voluptatem dignissimos modi a! Repudiandae adipisci itaque quam eius aliquam doloribus
        neque suscipit maxime nemo. Natus, fuga alias pariatur labore consectetur animi blanditiis, quia optio quas odit reiciendis et amet porro! Culpa,
        voluptatibus rerum. Tempora, quod tenetur dicta facere beatae exercitationem? Veniam voluptatum tempora repudiandae quod dolorem neque maxime nam
        distinctio aut eius inventore quisquam facilis quis nemo consectetur, temporibus eum recusandae iure. Maiores iusto recusandae laudantium
        consectetur, magni reprehenderit necessitatibus reiciendis dolore, ipsum ex libero dicta nihil, deserunt alias aliquam nesciunt suscipit aperiam
        quam.
      </div>
    </div>
  );
};

export default Pustaka;
