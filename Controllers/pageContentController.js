
const pageModel = require("../Models/pageContentModel");
const pageContent = {};

// קבלת כל התוכן
pageContent.getAll = async (req, res) => {
  try {
    const data = await pageModel.find({});
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("<h1>Server Error</h1>");
  }
};

// הוספה: קבלת דף הבית כמבנה שלם ופירוק למסמכים
pageContent.add = async (req, res) => {
  try {
    const data = req.body;
    const pageName = "home";
    const itemsToInsert = [];

    // HERO SECTION
    if (data.heroSection) {
      itemsToInsert.push(
        {
          elementTag: "hero-title",
          elementType: "text",
          text: data.heroSection.title,
          pageName
        },
        {
          elementTag: "hero-subtitle",
          elementType: "text",
          text: data.heroSection.subtitle,
          pageName
        },
        {
          elementTag: "hero-cta",
          elementType: "text",
          text: data.heroSection.ctaButtonText,
          pageName
        },
        {
          elementTag: "hero-image",
          elementType: "image",
          src: data.heroSection.heroImage,
          pageName
        }
      );
    }

    // ABOUT SECTION
    if (data.aboutSection) {
      itemsToInsert.push(
        {
          elementTag: "about-title",
          elementType: "text",
          text: data.aboutSection.title,
          pageName
        },
        {
          elementTag: "about-description",
          elementType: "text",
          text: data.aboutSection.description,
          pageName
        },
        {
          elementTag: "about-image",
          elementType: "image",
          src: data.aboutSection.image,
          pageName
        }
      );
    }

    // SERVICES SECTION
    if (data.servicesSection && Array.isArray(data.servicesSection.services)) {
      itemsToInsert.push({
        elementTag: "services-title",
        elementType: "text",
        text: data.servicesSection.title,
        pageName
      });

      data.servicesSection.services.forEach((service, index) => {
        itemsToInsert.push({
          elementTag: `service-${index + 1}-name`,
          elementType: "text",
          text: service.name,
          pageName
        });
        itemsToInsert.push({
          elementTag: `service-${index + 1}-description`,
          elementType: "text",
          text: service.description,
          pageName
        });
        itemsToInsert.push({
          elementTag: `service-${index + 1}-image`,
          elementType: "image",
          src: service.image,
          pageName
        });
      });
    }

    // TESTIMONIALS SECTION
    if (data.testimonialsSection && Array.isArray(data.testimonialsSection.testimonials)) {
      itemsToInsert.push({
        elementTag: "testimonials-title",
        elementType: "text",
        text: data.testimonialsSection.title,
        pageName
      });

      data.testimonialsSection.testimonials.forEach((testimonial, index) => {
        itemsToInsert.push({
          elementTag: `testimonial-${index + 1}-name`,
          elementType: "text",
          text: testimonial.name,
          pageName
        });
        itemsToInsert.push({
          elementTag: `testimonial-${index + 1}-feedback`,
          elementType: "text",
          text: testimonial.feedback,
          pageName
        });
        itemsToInsert.push({
          elementTag: `testimonial-${index + 1}-image`,
          elementType: "image",
          src: testimonial.image,
          pageName
        });
      });
    }

    // CONTACT SECTION
    if (data.contactSection) {
      itemsToInsert.push(
        {
          elementTag: "contact-title",
          elementType: "text",
          text: data.contactSection.title,
          pageName
        },
        {
          elementTag: "contact-description",
          elementType: "text",
          text: data.contactSection.description,
          pageName
        }
      );

      if (data.contactSection.contactForm) {
        itemsToInsert.push(
          {
            elementTag: "contact-form-name",
            elementType: "text",
            text: data.contactSection.contactForm.name,
            pageName
          },
          {
            elementTag: "contact-form-email",
            elementType: "text",
            text: data.contactSection.contactForm.email,
            pageName
          },
          {
            elementTag: "contact-form-message",
            elementType: "text",
            text: data.contactSection.contactForm.message,
            pageName
          }
        );
      }

      if (data.contactSection.contactDetails) {
        itemsToInsert.push(
          {
            elementTag: "contact-address",
            elementType: "text",
            text: data.contactSection.contactDetails.address,
            pageName
          },
          {
            elementTag: "contact-phone",
            elementType: "text",
            text: data.contactSection.contactDetails.phone,
            pageName
          },
          {
            elementTag: "contact-email",
            elementType: "text",
            text: data.contactSection.contactDetails.email,
            pageName
          }
        );
      }
    }

    await pageModel.insertMany(itemsToInsert);

    const allData = await pageModel.find({ pageName });
    res.status(200).json(allData);

  } catch (err) {
    console.error(err);
    res.status(500).send("<h1>Server Error</h1>");
  }
};

// מחיקת מסמך לפי ID
pageContent.delete = async (req, res) => {
  try {
    await pageModel.findByIdAndDelete(req.params.id);
    const data = await pageModel.find({});
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("<h1>Server Error</h1>");
  }
};

// עדכון מסמך לפי ID
pageContent.update = async (req, res) => {
  try {
    const updatedDoc = await pageModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    if (!updatedDoc) {
      return res.status(404).json({ message: "Not Found" });
    }

    res.status(200).json(updatedDoc);
  } catch (err) {
    console.error(err);
    res.status(500).send("<h1>Server Error</h1>");
  }
};

module.exports = pageContent;
