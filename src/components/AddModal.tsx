import { FormEvent } from "@/models/events"
import { REQUIRED_MESSAGE } from "@/utils/constants"
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
} from "@chakra-ui/react"
import { Formik } from "formik"
import { ChangeEvent, useState } from "react"
import * as Yup from "yup"

interface AddModalProps {
  onSubmit: (values: FormEvent) => void
  onClose: () => void
  isOpen: boolean
  isCreating: boolean
}

interface FormValues {
  title: string
  description: string
  date: string
}

const ValidationSchema = Yup.object().shape({
  title: Yup.string().required(REQUIRED_MESSAGE),
  description: Yup.string().required(REQUIRED_MESSAGE),
  date: Yup.string().required(REQUIRED_MESSAGE),
})

const initialValues = {
  title: "",
  description: "",
  date: "",
}

export default function AddModal({
  onSubmit,
  isOpen,
  isCreating,
  onClose,
}: AddModalProps) {
  const [dateMethod, setDateMethod] = useState("")

  function handleDateMethodChange(event: ChangeEvent<HTMLSelectElement>) {
    setDateMethod(event.target.value)
  }

  function handleSubmit(values: FormValues) {
    onSubmit({
      ...values,
      dateMethod,
    })
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <ModalContent>
              <ModalHeader>Adicionar evento</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <FormControl
                  mb={5}
                  isInvalid={Boolean(errors.title && touched.title)}
                >
                  <FormLabel htmlFor="title">Título</FormLabel>
                  <Input
                    size="lg"
                    id="title"
                    name="title"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                  />
                  {errors.title && touched.title && (
                    <FormErrorMessage>{errors.title}</FormErrorMessage>
                  )}
                </FormControl>
                <FormControl
                  mb={5}
                  isInvalid={Boolean(errors.description && touched.description)}
                >
                  <FormLabel htmlFor="description">Descrição</FormLabel>
                  <Input
                    size="lg"
                    id="description"
                    name="description"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                  />
                  {errors.description && touched.description && (
                    <FormErrorMessage>{errors.description}</FormErrorMessage>
                  )}
                </FormControl>
                <FormLabel>Como deseja marcar a data?</FormLabel>
                <Select onChange={handleDateMethodChange} mb={dateMethod && 5}>
                  <option value="">Selecione</option>
                  <option value="days">Por dias</option>
                  <option value="date">Por data</option>
                </Select>
                {dateMethod === "days" && (
                  <FormControl
                    mb={5}
                    isInvalid={Boolean(errors.date && touched.date)}
                  >
                    <FormLabel htmlFor="date">Quantidade de dias</FormLabel>
                    <Input
                      size="lg"
                      id="date"
                      name="date"
                      type="number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.date}
                    />
                    {errors.date && touched.date && (
                      <FormErrorMessage>{errors.date}</FormErrorMessage>
                    )}
                  </FormControl>
                )}
                {dateMethod === "date" && (
                  <FormControl
                    mb={5}
                    isInvalid={Boolean(errors.date && touched.date)}
                  >
                    <FormLabel htmlFor="date">Data do evento</FormLabel>
                    <Input
                      size="lg"
                      id="date"
                      name="date"
                      type="date"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.date}
                    />
                    {errors.date && touched.date && (
                      <FormErrorMessage>{errors.date}</FormErrorMessage>
                    )}
                  </FormControl>
                )}
              </ModalBody>
              <ModalFooter>
                <Button
                  isLoading={isCreating}
                  type="submit"
                  colorScheme="blue"
                  size="lg"
                >
                  Enviar
                </Button>
              </ModalFooter>
            </ModalContent>
          </form>
        )}
      </Formik>
    </Modal>
  )
}
