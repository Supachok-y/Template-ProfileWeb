export const content = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      name: 'Alex Johnson',
      title: 'Full Stack Developer',
      bio: 'Passionate developer crafting beautiful, performant web experiences. I turn ideas into elegant digital solutions.',
      buttons: { linkedin: 'LinkedIn', github: 'GitHub', cv: 'Download CV' },
    },
    about: {
      title: 'About Me',
      paragraphs: [
        "Hi! I'm Alex, a full stack developer with over 4 years of experience building modern web applications. I specialize in React, Node.js, and cloud infrastructure.",
        "When I'm not coding, you'll find me exploring new technologies, contributing to open source, or hiking in the mountains. I believe great software is built by curious, empathetic people.",
        "I'm currently open to new opportunities — feel free to reach out if you'd like to collaborate!",
      ],
    },
    experience: {
      title: 'Experience',
      items: [
        { id: 1, company: 'TechCorp Solutions', role: 'Senior Frontend Developer', period: '2022 – Present', description: 'Led the frontend architecture of a SaaS platform serving 50k+ users. Migrated legacy codebase to React + TypeScript, improving performance by 40%.', tags: ['React', 'TypeScript', 'AWS'] },
        { id: 2, company: 'Digital Agency Co.', role: 'Full Stack Developer', period: '2020 – 2022', description: 'Built and maintained 10+ client websites and web apps. Developed RESTful APIs with Node.js and integrated third-party services.', tags: ['Node.js', 'Vue.js', 'PostgreSQL'] },
        { id: 3, company: 'StartupXYZ', role: 'Junior Developer', period: '2019 – 2020', description: 'Contributed to an e-commerce platform from ground up. Implemented responsive UI components and payment gateway integrations.', tags: ['JavaScript', 'React', 'Stripe'] },
      ],
    },
    skills: {
      title: 'Skills',
      hardSkills: {
        label: 'Hard Skills',
        items: [
          { id: 1, name: 'React / Next.js', level: 'Expert' },
          { id: 2, name: 'TypeScript', level: 'Advanced' },
          { id: 3, name: 'Node.js', level: 'Moderate' },
        ],
      },
      softSkills: {
        label: 'Soft Skills',
        items: [
          { id: 1, name: 'Problem Solving', level: 'Expert' },
          { id: 2, name: 'Team Collaboration', level: 'Advanced' },
          { id: 3, name: 'Communication', level: 'Advanced' },
        ],
      },
      languages: {
        label: 'Languages',
        items: [
          { id: 1, name: 'English', level: 'Native' },
          { id: 2, name: 'Thai', level: 'Conversational' },
        ],
      },
    },
    projects: {
      title: 'My Projects',
      items: [
        { id: 1, title: 'E-Commerce Platform', description: 'A full-featured online store with cart, payments, and admin dashboard. Built with Next.js and Stripe.', tags: ['Next.js', 'Stripe', 'Tailwind'], link: 'https://example.com/', github: 'https://example.com/' },
        { id: 2, title: 'Task Management App', description: 'A real-time collaborative task manager with drag-and-drop boards, notifications, and team workspaces.', tags: ['React', 'Socket.io', 'MongoDB'], link: 'https://example.com/', github: 'https://example.com/' },
        { id: 3, title: 'AI Chat Interface', description: 'A sleek chat UI integrated with OpenAI API, supporting conversation history and markdown rendering.', tags: ['React', 'OpenAI', 'Node.js'], link: 'https://example.com/', github: 'https://example.com/' },
      ],
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Have a project in mind or just want to say hi? My inbox is always open.',
      email: 'alex@example.com',
      form: { name: 'Your Name', email: 'Your Email', message: 'Your Message', send: 'Send Message' },
    },
  },
  th: {
    nav: {
      home: 'หน้าแรก',
      about: 'เกี่ยวกับ',
      experience: 'ประสบการณ์',
      skills: 'ทักษะ',
      projects: 'โปรเจกต์',
      contact: 'ติดต่อ',
    },
    hero: {
      name: 'อเล็กซ์ จอห์นสัน',
      title: 'นักพัฒนา Full Stack',
      bio: 'นักพัฒนาที่หลงใหลในการสร้างเว็บที่สวยงามและมีประสิทธิภาพ ฉันเปลี่ยนไอเดียให้กลายเป็นโซลูชันดิจิทัลที่ยอดเยี่ยม',
      buttons: { linkedin: 'LinkedIn', github: 'GitHub', cv: 'ดาวน์โหลด CV' },
    },
    about: {
      title: 'เกี่ยวกับฉัน',
      paragraphs: [
        'สวัสดี! ฉันชื่ออเล็กซ์ นักพัฒนา Full Stack ที่มีประสบการณ์กว่า 4 ปีในการสร้างเว็บแอปพลิเคชันสมัยใหม่ เชี่ยวชาญด้าน React, Node.js และ Cloud Infrastructure',
        'เวลาว่างจากการเขียนโค้ด ฉันชอบสำรวจเทคโนโลยีใหม่ๆ มีส่วนร่วมใน Open Source หรือเดินป่าในภูเขา ฉันเชื่อว่าซอฟต์แวร์ที่ดีสร้างโดยคนที่มีความอยากรู้และเข้าใจผู้อื่น',
        'ขณะนี้ฉันเปิดรับโอกาสใหม่ๆ — อย่าลังเลที่จะติดต่อหากต้องการร่วมงานกัน!',
      ],
    },
    experience: {
      title: 'ประสบการณ์',
      items: [
        { id: 1, company: 'TechCorp Solutions', role: 'Senior Frontend Developer', period: '2022 – ปัจจุบัน', description: 'นำทีมออกแบบสถาปัตยกรรม Frontend ของแพลตฟอร์ม SaaS ที่มีผู้ใช้กว่า 50,000 คน ย้าย Codebase เก่าไปยัง React + TypeScript ทำให้ประสิทธิภาพดีขึ้น 40%', tags: ['React', 'TypeScript', 'AWS'] },
        { id: 2, company: 'Digital Agency Co.', role: 'Full Stack Developer', period: '2020 – 2022', description: 'สร้างและดูแลเว็บไซต์และแอปพลิเคชันของลูกค้ากว่า 10 โปรเจกต์ พัฒนา RESTful API ด้วย Node.js และเชื่อมต่อบริการภายนอก', tags: ['Node.js', 'Vue.js', 'PostgreSQL'] },
        { id: 3, company: 'StartupXYZ', role: 'Junior Developer', period: '2019 – 2020', description: 'ร่วมพัฒนาแพลตฟอร์ม E-Commerce ตั้งแต่เริ่มต้น สร้าง UI Components แบบ Responsive และเชื่อมต่อระบบชำระเงิน', tags: ['JavaScript', 'React', 'Stripe'] },
      ],
    },
    skills: {
      title: 'ทักษะ',
      hardSkills: {
        label: 'ทักษะด้านเทคนิค',
        items: [
          { id: 1, name: 'React / Next.js', level: 'เชี่ยวชาญ' },
          { id: 2, name: 'TypeScript', level: 'ชำนาญ' },
          { id: 3, name: 'Node.js', level: 'ปานกลาง' },
        ],
      },
      softSkills: {
        label: 'ทักษะด้านบุคคล',
        items: [
          { id: 1, name: 'การแก้ปัญหา', level: 'เชี่ยวชาญ' },
          { id: 2, name: 'การทำงานเป็นทีม', level: 'ชำนาญ' },
          { id: 3, name: 'การสื่อสาร', level: 'ชำนาญ' },
        ],
      },
      languages: {
        label: 'ภาษา',
        items: [
          { id: 1, name: 'อังกฤษ', level: 'เจ้าของภาษา' },
          { id: 2, name: 'ไทย', level: 'สนทนาได้' },
        ],
      },
    },
    projects: {
      title: 'โปรเจกต์ของฉัน',
      items: [
        { id: 1, title: 'แพลตฟอร์ม E-Commerce', description: 'ร้านค้าออนไลน์ครบวงจรพร้อมตะกร้าสินค้า ระบบชำระเงิน และแดชบอร์ดผู้ดูแล สร้างด้วย Next.js และ Stripe', tags: ['Next.js', 'Stripe', 'Tailwind'], link: 'https://example.com/', github: 'https://example.com/' },
        { id: 2, title: 'แอปจัดการงาน', description: 'ตัวจัดการงานแบบ Real-time พร้อม Drag-and-drop บอร์ด การแจ้งเตือน และพื้นที่ทำงานของทีม', tags: ['React', 'Socket.io', 'MongoDB'], link: 'https://example.com/', github: 'https://example.com/' },
        { id: 3, title: 'AI Chat Interface', description: 'UI แชทที่เรียบหรูเชื่อมต่อกับ OpenAI API รองรับประวัติการสนทนาและการแสดงผล Markdown', tags: ['React', 'OpenAI', 'Node.js'], link: 'https://example.com/', github: 'https://example.com/' },
      ],
    },
    contact: {
      title: 'ติดต่อฉัน',
      subtitle: 'มีโปรเจกต์ในใจหรืออยากทักทาย? กล่องข้อความของฉันเปิดรับเสมอ',
      email: 'alex@example.com',
      form: { name: 'ชื่อของคุณ', email: 'อีเมลของคุณ', message: 'ข้อความของคุณ', send: 'ส่งข้อความ' },
    },
  },
}
