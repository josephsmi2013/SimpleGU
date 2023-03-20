import styles from '@/styles/Services.module.css'

export default function Services() {
  return (
    <div className={styles.wrapper}>

      <div className={styles.banner}>
        <img src="banner.png" width="100%"></img>
        <h1>Gods Unchained</h1>
      </div>

      <div className={styles.services}>

        <div className={styles.service}>
          <h1>Service 1</h1>
          <p>This is the services text</p>
        </div>
        <div className={styles.service}>
          <h1>Service 2</h1>
          <p>This is the services text</p>
        </div>
        <div className={styles.service}>
          <h1>Service 3</h1>
          <p>This is the services text</p>
        </div>
        
      </div>

      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum atque suscipit nisi alias. Iure blanditiis itaque quia explicabo distinctio. Odit est nisi illo iste labore? Eveniet consectetur eos quaerat quos?</p>  
      </div> 

      <section className={styles.sections}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quidem rem cupiditate mollitia ratione nesciunt atque illo corporis eaque, exercitationem non autem eum? Reiciendis nemo aut et odit repellat, maxime obcaecati rem nulla laboriosam nesciunt laborum cum laudantium sequi dolorum recusandae veniam fuga soluta eveniet necessitatibus nam dolore officia a mollitia natus. Laboriosam et, molestiae id ipsa ex placeat architecto quos, explicabo beatae alias dignissimos laborum rem? Maiores facere obcaecati eius nisi consectetur asperiores quas rem quasi saepe similique dicta ipsa, vero eligendi molestias officiis magnam ipsum. Nulla et, non voluptatum, nam obcaecati at delectus nesciunt a dolores, eveniet id.
        </p>
      </section>
      <section className={styles.sections}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quidem rem cupiditate mollitia ratione nesciunt atque illo corporis eaque, exercitationem non autem eum? Reiciendis nemo aut et odit repellat, maxime obcaecati rem nulla laboriosam nesciunt laborum cum laudantium sequi dolorum recusandae veniam fuga soluta eveniet necessitatibus nam dolore officia a mollitia natus. Laboriosam et, molestiae id ipsa ex placeat architecto quos, explicabo beatae alias dignissimos laborum rem? Maiores facere obcaecati eius nisi consectetur asperiores quas rem quasi saepe similique dicta ipsa, vero eligendi molestias officiis magnam ipsum. Nulla et, non voluptatum, nam obcaecati at delectus nesciunt a dolores, eveniet id.
        </p>
      </section> 

    </div>
  )
}
