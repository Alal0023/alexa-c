CREATE OR REPLACE FUNCTION public.validate_newsletter_subscriber()
RETURNS TRIGGER LANGUAGE plpgsql SET search_path = public AS $$
BEGIN
  IF NEW.email IS NULL OR length(NEW.email) > 254 OR NEW.email !~ '^[^@\s]+@[^@\s]+\.[^@\s]+$' THEN
    RAISE EXCEPTION 'Invalid email address';
  END IF;
  NEW.email := lower(NEW.email);
  IF NEW.source IS NOT NULL AND length(NEW.source) > 64 THEN
    NEW.source := substring(NEW.source from 1 for 64);
  END IF;
  RETURN NEW;
END;
$$;
CREATE TRIGGER validate_newsletter_subscriber_trg
BEFORE INSERT ON public.newsletter_subscribers
FOR EACH ROW EXECUTE FUNCTION public.validate_newsletter_subscriber();